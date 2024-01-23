import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = props => {

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>
          
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>


            <li className="nav-menu-item">
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/Contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
