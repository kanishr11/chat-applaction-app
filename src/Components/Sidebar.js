import React, { useState } from 'react'
import './myStyles.css'
import LightModeIcon from '@mui/icons-material/LightMode';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { IconButton } from '@mui/material';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GroupsIcon from '@mui/icons-material/Groups';
import { ConversationsItem } from './ConversationsItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/ThemeSlice';

export const Sidebar = () => {
    const navigate = useNavigate();
    console.log(useSelector((state)=>state.themeKey))
    const dispatch = useDispatch();
    const lightTheme = useSelector((state)=>state.themeKey);
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
    return (
        <div className='sidebar-container'>
            <div className={`sd-header  ${lightTheme ? "" : "dark"}`}>
                <div>
                    <IconButton>
                        <PersonPinIcon 
                        className={`icon  ${lightTheme ? "" : "dark"}`} />
                    </IconButton>
                </div>
                <div>
                    <IconButton onClick={()=>{navigate('users')}}>
                        <PersonAddAlt1Icon 
                        className={`icon  ${lightTheme ? "" : "dark"}`} />
                    </IconButton>
                    <IconButton onClick={()=>{navigate('groups')}}>
                        <GroupsIcon className={`icon  ${lightTheme ? "" : "dark"}`} />
                    </IconButton>
                    <IconButton onClick={()=>{navigate('create-groups')}}>
                        <MapsUgcIcon className={`icon  ${lightTheme ? "" : "dark"}`} />
                    </IconButton>
                    <IconButton onClick={()=>{dispatch(toggleTheme())}}>
                        {lightTheme &&  <DarkModeIcon /> }
                        {!lightTheme &&  <LightModeIcon
                         className={`icon  ${lightTheme ? "" : "dark"}`} /> }
                    </IconButton>
                </div>

            </div>
            <div className={`sd-search  ${lightTheme ? "" : "dark"}`}>
                <IconButton>
                <PersonSearchIcon className={`icon  ${lightTheme ? "" : "dark"}`}/>
                </IconButton>
                <input  placeholder='Search' 
                className={`search-box  ${lightTheme ? "" : "dark"}`}/>
            </div>
            <div className={`sd-conversation  ${lightTheme ? "" : "dark"}`}>
                {conversations.map((conversation)=>{
                    return   <ConversationsItem props={conversation} key={conversation.name} />
                })} 
            </div>
        </div>
    )
}
