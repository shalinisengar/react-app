import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <div>
        <h2>Sign Up Form</h2>
        <span>Enter your Name : </span>
        <input type='text' placeholder='Enter your name : '/>
        <br/>
        <span>Enter your Mobile Number</span>
        <input type='number' placeholder='Enter your number : '/>
        <br/>
        <span>Enter your Email Address</span>
        <input type='email' placeholder='Enter your email :  '/>
        <br/>
        <span>Enter your password : </span>
        
        
      <Link to='/Login'> Login</Link>
      </div>
        
    </div>
  )
}

export default SignUp