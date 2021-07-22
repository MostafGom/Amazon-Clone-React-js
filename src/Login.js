import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'


function Login() {

  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(
        (auth) => {

          history.push('/')
        }
      )
      .catch(error => alert(error.message))
  }

  const register = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(
        (auth) => {
          if (auth) {
            history.push('/')
          }
        }
      )
      .catch(error => alert(error.message))
  }
  return (
    <div className='login' >

      <Link to='/'>
        <img
          className='login__logo'
          src="https://logolook.net/wp-content/uploads/2021/03/Amazon-logo.png"
          alt="amazon logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button types='submit' className='login__signinBtn' onClick={signIn} >Sign In</button>
        </form>
        <p>By Signing in you agree on the basic terms and confitions put by
          our privacy and security team in this clone site that doesn't have
          anything to do with amazon company
        </p>
        <button className='login__registerBtn' onClick={register} >New User! Create your account now</button>
      </div>
    </div>
  )
}

export default Login
