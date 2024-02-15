 import React from 'react'
 import './myStyles.css'
import { Sidebar } from './Sidebar'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Welcome } from './Welcome';
import { ChatArea } from './ChatArea';
import { CreateGroups } from './CreateGroups';
import { Groups } from './Groups';
import { Users } from './Users';



 
 export const MainContainer = () => {
  
   return (
     <div className='main-container'>
        <Sidebar/>
        {/* <Outlet/> */}
        {/* <Welcome/> */}
        {/* <CreateGroups/> */}
        {/* <ChatArea/> */}
        {/* <Groups/> */}
        <Routes>
        <Route path="welcome" element={<Welcome/>}/>
        <Route path="chat" element={<ChatArea/>}/>
        <Route path="users" element={<Users/>}/>
        <Route path="groups" element={<Groups/> }/>
        <Route path="create-groups" element={<CreateGroups/>}/>
        </Routes>
      </div>
   )
 }
  