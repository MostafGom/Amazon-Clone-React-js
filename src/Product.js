import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {

  const history = useHistory()
  const [{ user, basket }, dispatch] = useStateValue()

  // console.log(state.basket);
  const addToBasket = () => {
    if (!user) {
      alert("you need to have an account")
      history.replace('/login')
      return
    }
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  return (
    <div className="product">
      <div className="product__info">

        <p>{title} </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price} </strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}

        </div>
      </div>
      <img src={image}
        alt="product_image" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
