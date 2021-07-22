import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import adbanner from './images/adbanner.jpg'
// import FlipMove from 'react-flip-move'



function Checkout() {

  const [{ basket, user }, dispatch] = useStateValue()

  return (
    <div className='checkout' >
      <div className="checkout__left">
        <img
          className='checkout__ad'
          src={adbanner}
          alt="ad_image" />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">
            Your shopping basket
          </h2>
        </div>

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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
