import {
  Routes,
  Route,
} from "react-router-dom";

import { useEffect, useState } from "react";

import { useSessionStorage } from "./hooks/useSessionStorage";
import axios from "axios";

import {Container} from './components/styled/container.styled'
import SingupPg  from './pages/Singinpg';
import Home from './pages/homePg';
import Loginpg from './pages/Loginpg';
import AddBlogpg from './pages/AddBlogPg';
import UserPg from './pages/UserPg';
import {AuthContext} from './context/AuthContext'

function App() {
  const [isLogged,setLogged] = useState(false)
  const [token,setToken] = useState(sessionStorage.getItem("token"))
  const [anyChange,setAnyChange] = useState("")
  const [user,setUser] = useSessionStorage("user",null)
  return (
    <AuthContext.Provider value={{isLogged,setLogged,token,setToken,setAnyChange,user,setUser,anyChange}}>
      <Container>
        <Routes>
            <Route exact path='/' element={<Loginpg/>} />
            <Route exact path='/singup' element={<SingupPg/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/upload' element={<AddBlogpg/>}/>
            <Route exact path='/myacc' element={<UserPg/>}/>
        </Routes>
      </Container>
    </AuthContext.Provider>
  );
}

export default App;
