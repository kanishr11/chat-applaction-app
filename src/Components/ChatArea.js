import React, { useState } from 'react'
import './myStyles.css'
import { IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { MessageSelf } from './MessageSelf';
import { MessageOther } from './MessageOther';

export const ChatArea = () => {
  const [conversations,setConversations] = useState([
    {
        name:"Test1",
        lastMessage:"Last Message 1",
        timeStamp: "today",
    },
    {
        name:"Test2",
        lastMessage:"Last Message 2",
        timeStamp: "today",
    },
    {
        name:"Test3",
        lastMessage:"Last Message 3",
        timeStamp: "today",
    },
]);
var props=conversations[0];
  return (
    <div className='chatarea-container'>
        <div className='chatArea-header'>
      <p className='chatarea-icon'>{props.name[0]}</p>
      <p className='chatarea-title'>{props.name}</p>
      <p className='chatarea-lastmessage'>{props.lastMessage}</p>
      <p className='chatarea-deletebox'>
        <IconButton>
        <DeleteForeverIcon/>
        </IconButton>
      </p>
        </div>
        <div className='message-container'> 
        <MessageOther/>
        <MessageSelf/>
        <MessageOther/>
        <MessageSelf/>
        <MessageOther/>
        <MessageSelf/>
        </div>
        <div className='text-input-area'>
        <input placeholder='Type a Message' className='search-box'/>
        <IconButton>
        <SendIcon/>  
        </IconButton>   
        </div>
    </div>
  )
}
