import React,{  useState,useEffect } from "react";
import {Main,PrimaryDiv,StyledInput,StyledH1,BasicDiv,FrmBtn,ErrSpan} from './styled/container.styled'
import {NavLink} from 'react-router-dom'
import axios from "axios";
function Singup(){
  const [error,setError] = useState(undefined);
  const [email,setEmail] = useState("");
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [link,setlink] = useState(false);
  const [registered,setRegistered] = useState(false);

  const [loading,setLoading] = useState(false)

    useEffect(e=>{
      setError('')
      
    },[email])


    

    async function AuthUser(e){
      e.preventDefault()
      setLoading(true)
      if(1===1){
          try{
              let DOJ = new Date()
              let res = await axios.post("https://blogmania-server.herokuapp.com/login",{email,password,DOJ,userName},{
                headers:{
                  "Access-Control-Allow-Origin": "*"
              }
              })
              console.log(res);
              if(res.status === 200){
                 setRegistered(true)
                 setLoading(false)
              }else if(res.status==409){
                setError(`${email} account already exists so plz login`)
                setLoading(false)
                setlink(true)
              }
              

          }catch(err){
              let ERROR =JSON.stringify(err);
              console.log(typeof err);
              setLoading(false)
              if(ERROR.includes("Request failed with status code 409")=== true){
                setError(`${email} account already exists so plz login`)
                setlink(true) 
              }
              
          }
      }else{
          setError(" Re-enter password correctely ")
          return 
      }
  }
    
    return (
      <>
        
        <Main ht='66'>
          {
            registered === true ?
            <NavLink to='/' replace>
              <h1>Logged Success </h1>
              <h1>Click Here to login!</h1>
            </NavLink>
            : loading === true ? <StyledH1>Processing...</StyledH1>:
            <BasicDiv mgBtm='50'>
                <StyledH1 >SignUp!</StyledH1>
                  <ErrSpan>{error}</ErrSpan>
                 
                  <form   onSubmit={AuthUser} >
                    <h1 ></h1>
                        <StyledInput  
                          onChange={e=>setUserName(e.target.value)} 
                          type="text" 
                          placeholder="Enter Your User name" 
                          required />
                        <StyledInput  
                          onChange={e=>setPassword(e.target.value)} 
                          type="password"  
                          placeholder="Enter Password" 
                          required/>
                        <StyledInput   
                          onChange={e=>setEmail(e.target.value)} 
                          type="email" 
                          placeholder="Enter Your Email Id" 
                          required/>
                        <FrmBtn  className="frm-btn" typeof="submit">Submit</FrmBtn>
                  </form>  
                  {
                    link === true && <StyledH1><NavLink to={'/'} replace>Login Please</NavLink></StyledH1>
                  }
            </BasicDiv>   
          }      
        </Main>
        
      </>
    )
}

export default Singup;

// isUserCreated===true ?
//               <PrimaryDiv>
//                   <StyledH1>Account Created Successfully</StyledH1>
//                   <NavLink to={'/'}>Login Now</NavLink>
//                   {/* <h1><a href='http://localhost:3000/'>Login Now</a></h1> */}
//               </PrimaryDiv>
//             :