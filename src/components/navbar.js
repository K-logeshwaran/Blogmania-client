import { NavLink } from "react-router-dom";
import { SnavBar,PrimaryDiv } from "./styled/container.styled";
const NavBar=({logoutbtn,feeds,AddBlog,MyAcc})=>{
    const styl ={
        
        textDecoration: "none",
        color: "inherit"
        
    }
    return(
        <SnavBar>
            <NavLink to={'/home'} style={styl}>

                <h1>BlogMania!</h1>
                <p>Where People Share their Thoughts!</p>
            </NavLink>
            <PrimaryDiv>
                {feeds}
                {logoutbtn}
                {AddBlog}
                {MyAcc}
            </PrimaryDiv>
        </SnavBar>
    )
}
// NavBar.defaultProps={
//     logoutbtn:<button>Logout</button>,
//     //feeds:<a>Feeds</a>,
//     AddBlog:<a>AddBlog</a>,
//     MyAcc:<a>MyAccount</a>
// }
export default NavBar;