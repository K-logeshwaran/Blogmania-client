import {Main,Posts,StyledH1,StyledInput} from './styled/container.styled'
import {useState,useContext,useEffect} from 'react'
import TopRight from './UtilComps';


import { AuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';


function Content() {
    const [posts,setPosts] = useState(null)
    const [search,setSearch]=useState('')
    const state = useContext(AuthContext)

    let comps = [];

    console.log(posts);
    async function getAll() {
        let res = await fetch("https://blogmania-server.herokuapp.com/",{
            headers:{
                "x-access-token":sessionStorage.getItem("token"),
                "Access-Control-Allow-Origin": "*"
            }
        })
        let data = await res.json()
        setPosts(data)
    }

    useEffect(async ()=>{
        getAll();
      },[state.anyChange])

    return ( 
        <Main height="auto">
            {
                
                posts === null ? <StyledH1>Loading</StyledH1>
                :
                posts.forEach(itm=>{
                    let exp =itm.map(e=>{
                        return(
                            <Posts>
                                <NavLink to={`/bio/${e.created_by}`}>
                                    <TopRight
                                        userName={e.created_by}
                                        message={"( Click here to view profile )"}
                                        created_at={e.created_at}
                                        />
                                </NavLink>
                                <h1>{e.title}</h1>
                                <p>{e.content}</p>                                      
                            </Posts>   
                           
                        )
                    })
                    comps.push(exp)
                })
               
            }
            {
                comps.map(e=>e)
            }
        </Main>
     );
}

export default Content;



// filter(val=>{
//     if(search===''){
//         console.log("yup!");
//         return val 
//     }
//     else if(val.by.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
//         console.log("yup!");
//         return val
//     }else if(val.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
//         console.log("yup!");
//         return val
//     }else if(val.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
//         console.log("yup!");
//         return val
//     };
// })