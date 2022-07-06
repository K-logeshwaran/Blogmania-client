import { StyledFooter } from "./styled/container.styled";

function Footer() {
    return (  
        <StyledFooter>
            <p>Copyrights &copy; {new Date().getFullYear()} </p>
            <h3>Created by Logeshwaran K</h3>
        </StyledFooter>
    );
}

export default Footer;