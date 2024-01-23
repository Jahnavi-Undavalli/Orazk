
import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => {
  

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
        <img
          src="https://cdn1.feetport.com/3.0/assets/img/login/Images_5.png"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        /> 
          <h2 className="home-heading">Empowering Your Business</h2>
                <p className="home-heading">Unlock the potential with our top-notch services</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
           <Link to="/About">
            <button type="button" className="shop-now-button">
              Read More
            </button>
          </Link> 
        </div>
        
      </div>
    </>
  )
}

export default Home
