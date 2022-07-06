import Content from "../components/content";
import Footer from "../components/Footer";
import NavBar from "../components/navbar";
// import { data } from '../utils/Mockdata';
import axios from "axios";

import { useContext,useEffect,useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import {AuthContext} from '../context/AuthContext'
import { Main, } from "../components/styled/container.styled";
import { ErrSpan } from "../components/styled/container.styled";
//import {useState} from 'react'
function Home() {

    const navigator = useNavigate()
    
    const state = useContext(AuthContext);
    const styl={
        color:"inherit",
        textDecoration:"none"
    }
    
    //getData()
    //console.log(data);
    
    useEffect(async ()=>{
        console.log("token");
        console.log(state.token);
        if(!state.token || state.token === undefined){
          console.log("No token found");
        }else{
          let res = await axios.post("http://localhost:3001/user",{
            token:state.token
         })
          let data = res.data
          console.log(data);
          // sessionStorage.setItem("user",JSON.stringify(data))
          state.setUser(data)
        }
      },[state.anyChange])
    return (
        <>
            <NavBar 
                logoutbtn={<button
                onClick={e=>{
                    sessionStorage.clear()
                    navigator('/')
                }}
                >Logout</button>}
                AddBlog={<NavLink style={{
                color:"inherit",
                textDecoration:"none"
            }} to="/upload" replace>AddBlog</NavLink>}
                MyAcc = {<NavLink style={styl} to="/myacc">MyAccount</NavLink>}
            />
            {
                state.token === null ? 
                <Main>
                    <NavLink to='/'  replacement >
                    <ErrSpan>
                        UnAuthorized Access 
                        Login First
                    </ErrSpan>
                    </NavLink>  
                </Main>
                
                : <Content/>
            }
            <Footer/>
        </>
      );
}

export default Home;

