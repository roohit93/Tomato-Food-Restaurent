import React, { useState } from 'react'
import './Sign-in.css'
import { assets } from '../../assets/assets'
const Signin = ({setShowsignin}) => {

  const [currState,setCurrstate] = useState("Login")

  return (
    <div className="login-popup">
        <form  className="login-popup-content">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>{setShowsignin(false)}} src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" name="" id="" placeholder='Your name' required/>}
            <input type="email" name="" id="" placeholder='Your mail id' required/>
            <input type="password" name="" id="" placeholder='Your password'/>
          </div>
          <button>{currState==="Sign Up"?"Create account":"Login"}</button>
          <div className="login-popup-condition">
            <input type="checkbox" name="" id="" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
          {
            currState==="Login"
            ?<p>Create a new account? <span onClick={()=>{setCurrstate("Sign up")}}>Click here</span></p>  
            :<p>Already have a account? <span onClick={()=>{setCurrstate("Login")}}>Login here</span></p>
          }
          
          
        </form>
    </div>
  )
}

export default Signin