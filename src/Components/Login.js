import React from 'react'
import './myStyles.css'
import logo from '../Images/real-time-chat.png'
import { Button, TextField } from '@mui/material'

export const Login = () => {
  return (
    <div className='login-container'>
        <div className='image-container'>
          <img src={logo} alt='logo' className='welcome-logo'/>
        </div>
        <div className='login-box'>
            <p>Login to your Account</p>
            <TextField id="standard-basic" label="User Name" variant="outlined" />
            <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <Button variant="outlined">Login</Button>
        </div>
    </div>
  )
}

