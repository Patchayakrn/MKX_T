import React, { useState } from 'react'
import './LoginSingup.css'

import user_icom from '../Assets/user.png'
import password_icon from '../Assets/password.png'

const LoginSingup = () => {
  const [action]= useState("Login");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"> </div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icom} alt="" />
                <input type="text" placeholder="User" />
            </div>
          <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password"/>
          </div>
        </div>
        <dev className="forgot-password">Lost Password? <span>Click Here! </span></dev>
        <dev className="sumit-container">
            <div className={action==="Login"?"sumit gray" :"submit"}>Sign Up</div>
            <div className={action==="Sign Up"?"sumit gray" :"submit"}>Login</div>
        </dev>
    </div>
  )
}

export default LoginSingup