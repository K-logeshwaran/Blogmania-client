import styled from "styled-components";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
const Disp =styled.div`
    
    display: flex;
    flex-direction: column;
`
const UserInfo = styled.div`
    float: right;
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 5px 0;
        float: left;
        margin-right: 1em;
        
    }
`
const  SmallDiv = styled.div`
    margin-top:.7em ;
    h3{
      font-size: 1.3rem;
    }
    h4{
     margin-left: 0;
    }
`

function TopRight({userName,created_at,handler}) {
  const state = useContext(AuthContext);
  const [user,setUser] = useState("");
 
  const getName= async () =>{
    console.log("token");
    console.log(state.token);
    let res = await axios.post("http://localhost:3001/user",{
        token:state.token
    })
    let data = res.data
    console.log(data);
    setUser(data);
  }
  useEffect(()=>{
    getName()
  },[state.anyChange])  
    return(
        <Disp>
            <UserInfo>
              {/* <img  src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"/> */}
                <SmallDiv>
                    <h3> {userName}</h3>
                    <h3>Posted at : {created_at}</h3>
                </SmallDiv>
            </UserInfo>
        </Disp>
    )
}

TopRight.defaultProps ={
  handler:()=>console.log("cjnjndcdd")
}

export const Popup = props => {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };
export const NoClosePopup = ({content}) => {
    return (
      <div className="popup-box">
        <div className="box">
          {content}
        </div>
      </div>
    );
  };
  

export default TopRight;