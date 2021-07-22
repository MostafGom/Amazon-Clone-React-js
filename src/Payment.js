import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CurrencyFromat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'
import { db } from './firebase'


function Payment() {

  const history = useHistory()
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [clientSecret, setClientSecret] = useState(true)
  const [{ basket, user }, dispatch] = useStateValue()


  useEffect(() => {

    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payment/create?total=${Math.round(getBasketTotal(basket) * 100)}`
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  }, [basket])

  console.log('secret is ---->>> ', clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {

      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })

      history.replace('/orders')

      setSucceeded(true)
      setProcessing(false)
      setError(null)
      dispatch({
        type: "EMPTY_BASKET"
      })
    })
  }

  const handleChange = event => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
  }
  return (
    <div className='payment' >


      <div className="payment__container">

        <h1>
          Checkout {<Link to='/checkout'>({basket.length} items)</Link>}
        </h1>

        {/* Payment address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>221b Baker street</p>
            <p>London , UK</p>
          </div>
        </div>

        {/* items section  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Rveiew Order and Delivery</h3>
          </div>
          <div className="payment__item">
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment section  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFromat
                  renderText={(value) => (
                    <>
                      <h3>Order total : {value} </h3>
                    </>
                  )}

                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded} >
                  <span>{processing ? <p>Processing</p> : "Buy Now"} </span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Payment
