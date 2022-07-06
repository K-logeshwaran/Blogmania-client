import {Main,Posts,StyledH1,StyledInput} from './styled/container.styled'
import {useState,useContext,useEffect} from 'react'
import TopRight from './UtilComps';


import { AuthContext } from '../context/AuthContext';


function Content() {
    const [posts,setPosts] = useState(null)
    const [search,setSearch]=useState('')
    const state = useContext(AuthContext)

    let comps = [];

    console.log(posts);
    async function getAll() {
        let res = await fetch("http://localhost:3001/",{
            headers:{
                "x-access-token":sessionStorage.getItem("token")
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
            <StyledInput
            autoFocus
            autoCorrect
            onChange={e=>{
                setSearch(e.target.value)
                console.log(search);
            }}
             placeholder='Search'/>
            {
                
                posts === null ? <StyledH1>Loading</StyledH1>
                :
                posts.forEach(itm=>{
                    let exp =itm.map(e=>{
                        return(
                            <Posts>
                                <TopRight
                                    userName={e.created_by}
                                    created_at={e.created_at}
                                    />
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