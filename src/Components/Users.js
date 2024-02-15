import React from 'react'
import './myStyles.css'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material'
import logo from '../Images/real-time-chat.png'


export const Users = () => {
  return (
    <div className='list-container'>
        <div className='us-header'>
           <img
           src={logo}
           alt='logo'
           style={{height:"2rem",width:"2rem"}}
           />  
           <p className='us-title '>Online Users</p>                     
        </div>
        <div className='us-search'>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input  placeholder='Search' className='search-box'/>
        </div>
        <div className='us-list'>
          <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Users</p> 
          </div> 
          <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Users</p> 
          </div>  <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Users</p> 
          </div>  <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Users</p> 
          </div> 
          <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Users</p> 
          </div> 
          <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Users</p> 
          </div>  <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Users</p> 
          </div>  <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Users</p> 
          </div>  <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Users</p> 
          </div> 
          <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Users</p> 
          </div>  <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Users</p> 
          </div>  <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Users</p> 
          </div> 
        </div>
    </div>
  )
}
