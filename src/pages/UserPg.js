import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import UserPage from "../components/userPage";
import {NavLink,useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import {useContext} from 'react'
import { Main, ErrSpan } from "../components/styled/container.styled";
function UserPg() {

    const navigator = useNavigate()
    const state = useContext(AuthContext);
    
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
                
                : <UserPage/>
            }
            
            <Footer/>
        </>
    );
}

export default UserPg;