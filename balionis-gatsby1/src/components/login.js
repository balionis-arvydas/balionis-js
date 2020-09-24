import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import loginStyles from "./login.module.css"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <>
        <h1>Log in</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
          }}
        >
          <div className={loginStyles.entry}>
            <label for="username">Username </label>
            <input 
              type="tusernameext" 
              id="username"
              name="username" 
              placeholder="eg. john"
              onChange={this.handleUpdate} />
          </div>
          <div className={loginStyles.entry}>
            <label for="password">Password </label> 
            <input
              type="password"
              id="password"
              name="password"
              placeholder="eg. pass"
             onChange={this.handleUpdate} />
          </div>
          <input type="submit" value="Log In" />
        </form>
      </>
    )
  }
}

export default Login