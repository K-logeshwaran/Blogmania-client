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
    useEffect(e=>{
      setError('')
      
    },[email])


    

    async function AuthUser(e){
      e.preventDefault()
      if(1===1){
          try{
              let DOJ = new Date()
              let res = await axios.post("https://blogmania-server.herokuapp.com/login",{email,password,DOJ,userName})
              console.log(res);
              if(res.status === 200) setRegistered(true)

          }catch(err){
              console.log(err);
              if(err.response.status==409){
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
              <h1>Logged Success</h1>
            </NavLink>
            :
            
            
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
                        {/* <FrmBtn typeof="button" onClick={async e=>{
                        //let res =getPassword()
                          // let res = generatePassword()
                          // setPassword(res.password)
                          // pass.current.value=res.password                    
                        }} className="frm-btn" type="button">Generate Password</FrmBtn> */}
                        
                  </form>  
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