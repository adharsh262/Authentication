// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Header />
        <div className="contentContainer">
          <h1 className="heeading">Clothes That Get YOU Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
            alt="clothes that get you noticed"
            className="bannerHomeImg"
          />
          <div className="homeContainerLoarge">
            <h1 className="heeadinglarge">Clothes That Get YOU Noticed</h1>
            <p className="paraEl">
              Fashion is part of the daily air and it does not quiteb help that
              it changes all the time.Clothed have always been a marker of the
              era and we are in a revolution.
            </p>
            <p className="paraEl">
              Your fashion makes you been seen and heard that way you
              are.So,celebrate the seasons new and exciting fashon in your own
              way.
            </p>
            <button type="button" className="shopNowButton">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
