import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

export const FooterContainer = styled.section`
    width: 100%;
    padding: 20px 0px;
    background-color: #F87529;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 800px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const FSpan = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;

    @media screen and (max-width: 800px){
        margin-bottom: 20px;
    }
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
    margin-left: 30px;    

    @media screen and (max-width: 800px){
        margin-right: 0px;
        margin-left: 0;
        margin-bottom: 20px;
    }
`;

export const FNav = styled.nav`
    @media screen and (max-width: 800px){
        margin-bottom: 20px;
    }
`;

export const List = styled.ul`
    display: flex;

    @media screen and (max-width: 800px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Item = styled.li`
    margin-right: 20px;
    cursor: pointer;
    color: #fff;

    &:hover{
        text-decoration: underline;
    }

    @media screen and (max-width: 800px){
        margin-right: 0px;
        margin-bottom: 15px;
    }
`;

export const FSocial = styled.div`
    min-width: 120px;
    display: flex;
    justify-content: space-between;
    margin-right: 20px;

    @media screen and (max-width: 800px){
        margin-right: 0px;
    }
`;

export const FWhats = styled(FaWhatsapp)`
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
        transition: 0.2s ease-in-out;
    }
`;

export const FInstagram = styled(FaInstagram)`
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
        transition: 0.2s ease-in-out;
    }
`;

export const FLinkedin = styled(FaLinkedin)`
    color: #fff;
    cursor: pointer;

    transition: 0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
        transition: 0.2s ease-in-out;
    }
`;