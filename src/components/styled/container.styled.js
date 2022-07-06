import styled from 'styled-components'
export const W =93
const H=window.screen.height/13

//const primary="#11071a"
const primary="#28065c"
const Bcolor="#fff"
const btnMargin=()=>{
    if (window.screen.width<900) return 50
    return 89
}


export const Container =styled.div`
    width: 100%;
    max-width:${W}vw;
    color:#fff; 
    background: #fff;
    display: flex;
    flex-direction: column;
    margin: auto;
    @media only screen and (max-width: 768px) {
        max-width:99vw;
        //max-width:100%;
        /* height: auto;
        height: 100%; */
    }

`

export const Main = styled.main`
    color: ${primary};
    flex-grow: 1;
    padding: 120px 1rem;    
    padding-bottom: 0;
    background-color: ${props=>props.bg};
    height: auto;
    height: ${props=>props.ht}vh;
    //width: 100%;
  
    
`
export const StyledFooter =styled.footer`
    margin-top: 10px ;
    margin-bottom: 0px;
    padding: 25px 10px;
    background-color: #11071a; 
    text-align: center;
    bottom: 0;
    //position: fixed;
    width: inherit;
    max-width:${W-1.5}vw;
    @media only screen and (max-width: 768px) {
        max-width: 94.9vw;
        margin-right:0 ;
        bottom: 0;
        margin-bottom: 0;
        h1{
            font-size: 1.3em;   
        }
        p{
            font-size: .7em;
        }
    }
    
`

export const SnavBar= styled.nav`
    margin-bottom: 10px ;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    background-color: #11071a; 
    top: 0;
    position: fixed;
    width: ${W-3}vw;
    @media only screen and (max-width: 768px) {
        h1{
            font-size: 1.3em;   
        }
        p{
            font-size: .7em;
        }
    }

`
export const PrimaryDiv=styled.div`
    margin: 5px 10px;
    button{
        margin: 0px 15px;
        background:none ;
        border: none;
        color: inherit;
        font-size: inherit;
    }
    a{
        font-size:inherit; 
        margin-left:10px
    }
    @media only screen and (max-width: 768px) {
        margin: 5px 0;
        button{
            //margin: 0px 5px;
            background:none ;
            border: none;
            color: #fff;
            font-size: .7em;
            background: transparent;
            padding: 5px;
            border-radius: 25px;
            font-weight: bold;
        }
        a{
            font-size:.7em; 
            margin-left:10px;
            font-weight: bold;
            color: #11071a;
            //background-color:#fff ;
    }
    }
`

export const Posts =styled.div`
    width: 100%;
    margin: 1rem ;
    padding: 1rem;
    padding-bottom: 50px;
    
    padding-left: 5px;
    color: #270347;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    h1{
        font-size: 1.3rem;
        text-align: justify;
        padding: 1rem;
    }
    h4{
        margin-left: ${W-20}vw;
    }
    p{
        padding: 0 1.7rem;
        font-weight: lighter;
    }
`
export const BasicDiv =styled.div`
    width: ${props=>props?.width ?props.width:70}%;
    margin: auto;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
    @media only screen and (max-width: 768px) {
        width: 90%;
    }

`

export const FrmBtn =styled.button`
    width: 100%;
    color: ${prop=>prop.color? prop.color:Bcolor} ;
    background-color:${prop=>prop.bg? prop.bg:primary} ;
    padding: 10px 0;
    text-align: center;
    margin: 10px 0;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    width: ${props=>props.width};
`
export const StyledH1 =styled.h1`
    font-size: 2rem;
    color: ${prop=>prop?.color? prop.color:primary};
    border-bottom: 1px dashed black;
    margin: 10px 0;
    padding: 10px 0;
`

export const StyledInput =styled.input`
    margin: 8px 0;
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    color:${prop=>prop?.color? prop.color:primary}; ;
    padding: 10px 0;
    padding-left: 4px;
    font-size: inherit;
`

export const Msg =styled.div`
    width: 100%;
    display: flex;
    align-items: baseline;
    gap: 5px;
    justify-content: center;
`

export const DelBtn =styled.button`
    width: 8%;
    //margin-left:${btnMargin()}% ;
    float: right;
    margin-top: 10px;
    padding: 4px 9px;
    background-color: #e34536;
    font-weight: bold;
    color: whitesmoke;
    border: 1px solid red;
    border-radius:5px;
    margin-right: 15px;
    font-size: .5em;
    @media only screen and (max-width: 768px) {
        width: 50px;
        padding: 5px;
        font-size: .7em;
    }
`
export const  StyledLable=styled.label`
    font-size: 1.5rem;
    color: inherit;
    font-weight: bold;
    color: #270347;
    margin: 10px 0;
`
export const StyledTxtArea =styled.textarea`
    width: 100%;
    height: 400px;
    resize: vertical;
    color: black;
    font-size: 20px;
    margin: 10px 0;
    padding: 10px 0 ;
    padding-left: 5px;
    height: ${props=>props.ht};
    width: ${props=>props.wd};

`

export const  ErrSpan =  styled.span`
    font-size: 1.5em;
    color: red;
    color: ${props=>props.crl};

`