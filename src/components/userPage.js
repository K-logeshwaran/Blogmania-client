import { useState,useContext, useEffect, useRef } from "react";
import {Main,DelBtn,StyledH1} from  "./styled/container.styled"
import { Flex ,Simg,Side,Uposts,SLeft,UL,Btn} from "./styled/flexContainer";
import TopRight ,{Popup} from './UtilComps';
// import {data} from '../utils/Mockdata'
import {StyledLable,FrmBtn,StyledTxtArea} from './styled/container.styled'
import {AuthContext} from '../context/AuthContext'
import axios from "axios";

function EditContent({close,bioController}) {
    const [bio,setBio] = useState("");
    return ( 
        <div>
            <StyledLable htmlFor="bio">Edit Bio</StyledLable>
            <StyledTxtArea ht='200px' wd='100%'
                onChange={e=>setBio(e.target.value)}
            />
            <FrmBtn 
                bg ='#000'
                onClick={ async e=>{
                    try{
                        let res =await axios.put('https://blogmania-server.herokuapp.com/user/bio',{
                            token:sessionStorage.getItem("token"),
                            bio:bio
                        },{
                            headers:{
                                "Access-Control-Allow-Origin": "*"
                            }
                        });
                        let rep =res.data
                        console.log(rep);
                        
                    }catch(err){
                        console.log(err);
                    };
                    bioController();
                    close();
                    
                }}
            >Update</FrmBtn>
        </div> 
    );
};

const user =""

function UserPage() {
    const [isopen,setOpen] =useState(false)
    const [upload,setUpload] =useState(false)
    const [userData,setUserData] =useState(null)
    const [isBioChanged,setIsBioChanged] =useState(false)
    let img = useRef();

    const useBio = ()=>setIsBioChanged(!isBioChanged)

    const usePopup =()=>setOpen(false)
    const state = useContext(AuthContext);
    console.log(state);
    const getuser= async () =>{
        console.log("token");
        console.log(state.token);
        let res = await axios.post("https://blogmania-server.herokuapp.com/user",{
            token:state.token
        },{
            headers:{
                "Access-Control-Allow-Origin": "*"
            }
        })
        let data = res.data
        console.log(data);
        setUserData(data);
    }
    
      useEffect(()=>{
        getuser()
      },[isBioChanged])
    return ( 
        <>
            {
                userData === null ? <h1>Loading</h1> :
                <Main>
            { 
                isopen===true &&<Popup
                handleClose={usePopup}
                content ={<EditContent close={usePopup} bioController={useBio}/>}
                />

                
            }
            {
                upload === true && 
                <Popup
                    content={<input ref={img} type="file" onInput={(e)=>{
                        console.log(e.target.files[0])
                        setUpload(!upload)
                    }} placeholder="upload img"/>}
                    handleClose={()=>setUpload(!upload)}
                />
            }
            <Flex>
                <SLeft>
                {/* <Simg onClick={e=>{
                    setUpload(true)
                }} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"/> */}
                    <UL>
                       <h2>{userData.userName}
                       <li>{userData.email}</li>
                       </h2>
                       <li >Number of Posts:{userData.posts.length}</li>
                       <h2>Bio:</h2> 
                       <p>{userData.bio}</p>
                       <Btn onClick={()=>setOpen(true)}>Edit</Btn>
                    </UL>
                </SLeft>
                
                <Side id="side">
                    <StyledH1>Your Posts</StyledH1>
                    {
                        userData.posts.length === 0 ?
                        <StyledH1>Nothing Posted Yet</StyledH1>
                        :userData.posts.map(e=>{
                            return(
                                <Uposts widht="70%" >
                                    <TopRight
                                        
                                        userName={userData.userName}
                                        created_at ={e.created_at}
                                    />
                                    <h3 style={{"padding":"1rem"}}>{e.title}</h3>
                                    <p style={{"padding":"1rem"}}>{e.content}</p>
                                    <DelBtn onClick={e=>console.log("hello")}>Delete</DelBtn>
                                </Uposts>
                            )
                        })
                    }
                </Side>
            </Flex>
        </Main>
            }
        </>
     );
}

export default UserPage;

// @logeshdev.com