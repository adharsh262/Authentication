// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-Container">
    <div className="nav-imgContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="navLogo"
      />

      <button type="button" className="logoutButton">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="navLogout"
        />
      </button>
    </div>

    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="navLogo1"
    />

    <div className="listContainerLarge">
      <ul className="unorderedListLarge">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
      </ul>

      <button type="button" className="logoutButton1">
        Logout
      </button>
    </div>

    <ul className="unorderedListsmall">
      <li>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="navLogoitems"
          />
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="navLogoitems"
          />
        </Link>
      </li>
      <li>
        <Link to="/products">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="navLogoitems"
          />
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
