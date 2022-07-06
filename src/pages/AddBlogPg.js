import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import AddBlogs from "../components/Addblogs";
import { NavLink } from "react-router-dom";

function AddBlogpg() {
    const styl={
        color:"inherit",
        textDecoration:"none"
    }
    return (  
        <>
            <NavBar MyAcc={<NavLink style={styl} to="/myacc">MyAccount</NavLink>}/>
            <AddBlogs/>
            <Footer/>
        </>
    );
}

export default AddBlogpg;