import React, { useState } from 'react'
import './LoginSingup.css'

import user_icon from '../Assets/user.png'
import password_icon from '../Assets/password.png'

const LoginSingup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="User icon" />
          <input type="text" placeholder="User" />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Lost Password? <span>Click Here!</span>
      </div>
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        > Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        > Login
        </div>
      </div>
    </div>
  )
}

export default LoginSingup