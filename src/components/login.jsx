import {useState,useEffect,useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import {BasicDiv,Main,Msg,FrmBtn,StyledH1,StyledInput,ErrSpan, PrimaryDiv} from './styled/container.styled'

import {NavLink,useNavigate} from 'react-router-dom'
import axios from 'axios'

export function Logincp() {
    const [error,setError] = useState(undefined);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [loading,setLoading] = useState(false)

    const navigate = useNavigate();
    const state = useContext(AuthContext);
    console.log(state);
   
    useEffect(e=>{
        setError("")
    },[email,password])
  
        
      
      async function submitHandler(e){
        e.preventDefault()
        setLoading(true)
        try{
            let res = await axios.post("https://blogmania-server.herokuapp.com/login/generateToken",{email,password},{ headers:{
                "Access-Control-Allow-Origin": "*"
            }})
            console.log(res);
            if(res.status == 200){
                sessionStorage.setItem("token",res.data)
                state.setToken(res.data)
                state.setLogged(true)
                setLoading(false)
                state.setAnyChange("home")
                navigate('/home',{ replace: true })
            }
        }catch(err){
            console.log(err);
            if (err.response===undefined){
                setError("Server Connection Failed Try Later Please")
            }else{
                if(err.response.status===401){
                    setError(err.response.data)
                 }else if(err.response.status===404){
                     setError(err.response.data)
                 }
            }
        }
    }

    
       
    return(
       <Main ht='66'>
        
            <BasicDiv>
                {
                    loading === true ? 
                    <StyledH1>Logging In Please wait ...........</StyledH1>
                    :
                    <>
                        <StyledH1>LogIn!</StyledH1>
                <ErrSpan>{error}</ErrSpan>
                <form 
                    onSubmit={submitHandler} >
                    <StyledInput  
                        onChange={e=>setEmail(e.target.value)}                          
                        placeholder="Enter Your Email Id"  
                        required />
                    <StyledInput  
                        onChange={e=>setPassword(e.target.value)} 
                        type="password" 
                        placeholder="Enter Password" 
                        required/>
                    <FrmBtn 
                        className="frm-btn" 
                        type="submit"
                    >Submit</FrmBtn>
                </form>
                
                <Msg>
                    <h4 style={{margin:"5px"}}>Not Having a account?</h4>
                    <NavLink replace to='/singup'>SignUp! Now</NavLink>
                </Msg> 
                    </>
                }
                               
            </BasicDiv>
        
       </Main>
        
    );
    
}

// success===true?<PrimaryDiv>
//             <StyledH1>Login Success</StyledH1>
//             <a href='#'>Go back Home</a>
//         </PrimaryDiv>: