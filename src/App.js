import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Login } from './Components/Login';
import { MainContainer } from './Components/MainContainer';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/main/*" element={<MainContainer/>}/>
          {/* <Route path="welcome" element={<Welcome/>}/>
          <Route path="chat" element={<ChatArea/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="groups" element={<Groups/> }/>
          <Route path="create-groups" element={<CreateGroups/>}/> */}
        </Routes> 
        {/* <Login/> */}
        {/* <Mainontainer/> */}
    </div>
  );
}

export default App;
