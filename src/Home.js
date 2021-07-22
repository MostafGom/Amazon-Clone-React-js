import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://www.technodecks.com/wp-content/uploads/2021/06/Wallpaper_com.amazon.avod_.thirdpartyclient.jpg"
          alt="banner"
        />

        <div className="home__row">
          {/* 2 products */}
          <Product
            id={11}
            title='Mitzie Organic Cleaning Products'
            image='https://images.unsplash.com/photo-1549049950-48d5887197a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
            price="36.99"
            rating={5} />

          <Product
            id={12}
            title='Juicy juice drinking power'
            image='https://images.unsplash.com/photo-1521488674203-62bf581664be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1534&q=80'
            price="19.99"
            rating={4} />

        </div>

        <div className="home__row">
          <Product
            id={21}
            title='Classy shoe and beyond'
            image='https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=343&q=80'
            price="59.99"
            rating={5} />
          <Product
            id={22}
            title='Mountain kura bags'
            image='https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=369&q=80'
            price="129.99"
            rating={5} />
          <Product
            id={23}
            title='Beautiful shoes'
            image='https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
            price="99.99"
            rating={4} />

        </div>
        <div className="home__row">
          <Product
            id={311}
            title='Tyolona Headphones classic'
            image='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
            price="69.99"
            rating={5} />

        </div>

      </div>
    </div>
  )
}

export default Home
