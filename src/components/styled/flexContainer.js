import styled from "styled-components";
import { W } from "./container.styled";
export const Flex =styled.main`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 95vw;
    }
`
export const Simg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: auto;
    margin-bottom: 0;
    margin-top: 0;  
`

export const Side =styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 180px;
    margin-left: 20px;
    height: 66vh;
    flex-basis: 50%;
    overflow: auto;   
    @media only screen and (max-width: 768px) {
        width: 100%;
        margin: auto ;
        height: auto;
    }

`

export const Uposts = styled.div`
    width: 90%;
    margin: auto;
    padding: 10px 0px;
    padding-left: 5px;
    color: #270347;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    h4{
        margin-left: ${W-20}vw;
    }
    
    flex-shrink: 0;  
    margin-top : 15px;
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
        width: 87%;
        p{
            text-align: justify;
            width: 80%;
            margin: auto;
            
        }
    }
`

export const SLeft =styled.div`
    flex-basis: 30%;
    display: flex;
    flex-direction: column;    
    border-radius: 5px;
`

export const UL =styled.ul`
    color: rgb(44,55,66);
    padding:5px;
    width: 90%;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    margin: auto;
    margin-bottom: 0;
    margin-top: 10px;   
    flex-shrink: 0;
    border-radius: 5px; 
    font-family: 'Courier New', Courier, monospace;
    h2{
        padding: 5px;
        padding-bottom: 0;
    }
    h2 li{
        font-size: 12px;
        margin: 0;
        padding: 0;
    }
    li{
        list-style: none;
        text-decoration: none;
        padding-left: 5px; padding-top: 5px;
        font-weight: bold;
    };
    p{
        padding: 5px;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        color: rgb(44,55,66);
        width: 80%;
        margin: auto;
    }
`
export const Data =styled.h3`
    color: blueviolet;
    width: 100%;
    text-align :center ;
    margin: 10px 0;
    height: 50px;  
`

export const Btn =styled.button`width: 100%;
    padding: 10px 0;
    text-align: center;
    margin: 10px 0;
    margin-right: 7px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
    background-color: black;
    width: 50%;
    float: right;
`