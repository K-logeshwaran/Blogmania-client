//PEMDING PAGE :( 21/3/2022
import {Main,StyledInput,StyledLable,FrmBtn,BasicDiv,StyledTxtArea} from './styled/container.styled'
import { useState,useEffect,useRef } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function AddBlogs() {
    const [title,settitle] = useState(null);
    const [content,setContent] = useState(null);
    const [success,setSuccess] = useState(false);
    const tit = useRef();
    const con = useRef();
    const navigator = useNavigate()
    const handler =async  (e)=>{
        let res = await axios.post("https://blogmania-server.herokuapp.com/posts",{
            token:sessionStorage.getItem("token"),
            post:{
                title,
                content
            }
        },{
            headers:{
                "Access-Control-Allow-Origin": "*"
            }
        });
        console.log(res);
        setSuccess(true)
        alert("Blog Added Successfully")
        navigator('/myacc',{replace:true})
    }
    useEffect(()=>{
        console.log(tit.current,
        con.current);
        console.log(tit.current.value);
        tit.current.value=""
        con.current.value=""
    },[success])
    return ( 
        <Main>
            <BasicDiv width='60'>
                <StyledLable>Title</StyledLable>
                <StyledInput 
                    placeholder='Title of Post'
                    onChange={(e)=>settitle(e.target.value)}
                    ref={tit}
                />
                <StyledLable>Body</StyledLable>
                <StyledTxtArea 
                    autoFocus 
                    placeholder='Content...'
                    onChange={(e)=>setContent(e.target.value)}
                    ref={con}
                />
                <FrmBtn
                    onClick={handler}
                >Upload</FrmBtn>
           </BasicDiv>
        </Main>
     );
}

export default AddBlogs;

//https://blogmania-server.herokuapp.com/