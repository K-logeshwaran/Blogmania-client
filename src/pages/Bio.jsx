import Footer from "../components/Footer";
import NavBar from "../components/navbar";
import { Main, StyledH1 } from "../components/styled/container.styled";
import { useParams } from "react-router-dom";
import {SLeft,UL} from '../components/styled/flexContainer'
import { useEffect, useState } from "react";
import axios from "axios";

function Bio() {
    const Parms = useParams()
    // const userData={
    //     userName:"Logesh",
    //     email:"email.com",
    //     posts:[],
    //     bio:"Hello world"

    // }
    const [userData,setUserData] = useState(null)
    // console.log(data)
    useEffect(async () => {
        let res = await axios.post("https://blogmania-server.herokuapp.com/one",{
            name:Parms.id 
        },{
            headers:{
                "x-access-token":sessionStorage.getItem("token"),
                
            }
        })
        console.log(res.dat);
        setUserData( res.data)
    }, [Parms.id])  
    
    return ( 
        <>
            <NavBar/>
            <Main>
                {
                    userData === null || undefined ? <StyledH1>Loading.....</StyledH1>:
                     <SLeft>
                   
                     <UL>
                         <h2>{userData.userName}
                             <li>{userData.email}</li>
                         </h2>
                             <li >Number of Posts:{userData.posts.length}</li>
                         <h2>Bio:</h2> 
                         <p>{userData.bio}</p>
                     </UL>
                 </SLeft>
                }
           
            </Main>
            <Footer/>
        </>
        
      );
}

export default Bio;