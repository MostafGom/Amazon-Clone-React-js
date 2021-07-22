import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import logo from './images/amazonlogo.webp'

function Header() {
  const [{ basket, user }, dispatch] = useStateValue()

  const handleAuthentication = () => {
    if (user) {
      auth.signOut()
    }
  }
  return (
    <div className="header">
      <Link to='/'>
        <img className='header__logo'
          alt='logo'
          src={logo}
        />
      </Link>

      <div className='header__search'>

        <input
          className='header__searchInput'
          type='text'
        />

        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to={!user && '/login'} >
          {/* option 1 */}
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>
              Hello {!user ? 'Guest' : user.email}
            </span>
            <span className='header__optionLineTwo'>
              {user ? 'SIGN OUT' : 'SIGN IN'}
            </span>
          </div>
        </Link>

        <Link to="/orders" >
          {/* option 2 */}
          <div className='header__option'>
            <span className='header__optionLineOne'>
              Return
            </span>
            <span className='header__optionLineTwo'>
              Orders
            </span>
          </div>
        </Link>

        {/* option 3 */}
        <div className='header__option'>
          <span className='header__optionLineOne'>
            Your
          </span>
          <span className='header__optionLineTwo'>
            Prime
          </span>
        </div>

        {/* option 4 */}
        <Link to='/checkout'>

          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount" >{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
