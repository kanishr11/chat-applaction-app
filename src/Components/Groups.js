import React from 'react'
import './myStyles.css'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material'
import logo from '../Images/real-time-chat.png'
import { useSelector } from 'react-redux';


export const Groups = () => {
  const lightTheme = useSelector((state)=>state.themeKey);
  return (
    <div className='list-container'>
        <div className={`ug-header  ${lightTheme ? "" : "dark"}`}>
           <img
           src={logo}
           alt='logo'
           style={{height:"2rem",width:"2rem"}}
           />  
           <p className={`ug-title  ${lightTheme ? "" : "dark"}`}>Available Groups</p>                     
        </div>
        <div className={`ug-search  ${lightTheme ? "" : "dark"}`}>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <input  placeholder='Search' className={`search-box  ${lightTheme ? "" : "dark"}`}/>
        </div>
        <div className={`ug-list  ${lightTheme ? "" : "dark"}`}>
          <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Group</p> 
          </div> 
          <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Group</p> 
          </div>  <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Group</p> 
          </div>  <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Group</p> 
          </div> 
          <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Group</p> 
          </div> 
          <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Group</p> 
          </div>  <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Group</p> 
          </div>  <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Group</p> 
          </div>  <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Group</p> 
          </div> 
          <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Group</p> 
          </div>  <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Group</p> 
          </div>  <div className='list-tem'>
            <p className='con-icon'>T</p> 
            <p className='con-title'>Test Group</p> 
          </div> 
        </div>
    </div>
  )
}
