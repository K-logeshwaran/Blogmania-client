import { Logincp } from "../components/login";
import NavBar from "../components/navbar";
import Footer from "../components/Footer";
import {useNavigate} from 'react-router-dom'
function Loginpg() {

    
    return (  
        <>
            <NavBar/>
            <Logincp/>
            <Footer/>
        </>
    );
}

export default Loginpg;