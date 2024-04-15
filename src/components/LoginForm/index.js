// Write your JS code here
import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isMsgPresent: false, errMsg: ''}

  onChangeuserName = event => {
    this.setState({username: event.target.value})
  }

  onChangepassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccesSubmit = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props

    history.replace('/')
  }

  onFailurSubmit = errMsg => {
    this.setState({isMsgPresent: true, errMsg})
    const {history} = this.props

    history.replace('/login')
  }

  onSubmitForm = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.onSuccesSubmit(data.jwt_token)
    } else {
      this.onFailurSubmit(data.error_msg)
    }
  }

  torenderUserName = () => {
    const {username} = this.state

    return (
      <div className="usernameCont">
        <label htmlFor="Username" className="userNameLabel">
          USERNAME
        </label>
        <input
          type="text"
          id="Username"
          placeholder="Username"
          className="usernameInput"
          onChange={this.onChangeuserName}
          value={username}
        />
      </div>
    )
  }

  torenderPassword = () => {
    const {password} = this.state

    return (
      <div className="usernameCont">
        <label htmlFor="password" className="userNameLabel">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="usernameInput"
          onChange={this.onChangepassword}
          value={password}
        />
      </div>
    )
  }

  render() {
    const {isMsgPresent, errMsg} = this.state

    return (
      <div className="loginFormContainer">
        <div className="bgContlogin">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="navLogologin"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="LoginLogo"
          />
          <form className="formEl" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="navLogologin1"
            />
            {this.torenderUserName()}
            {this.torenderPassword()}

            <button type="submit" className="logoutButton2">
              Login
            </button>
            {isMsgPresent ? <p className="errorMsg">*{errMsg}</p> : null}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
