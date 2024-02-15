import React from 'react'
import './myStyles.css'
import { DoneOutlineRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
export const CreateGroups = () => {
  return (
    <div className='createGroups-container'>
      <input placeholder='Enter Group Name'
      className='search-box'
      />
      <IconButton>
        <DoneOutlineRounded/> 
      </IconButton>
    </div>
  )
}
