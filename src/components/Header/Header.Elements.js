import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px;
`;

export const HeaderLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`;

export const HeaderImg = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

export const HeaderTitle = styled.span`
    font-size: 18px;
    font-weight: 500;
    margin-right: ${({mRight}) => `${mRight}px`};
`;

export const HeaderNav = styled.nav`
    @media screen and (max-width: 800px){
        display: none;
    }
`;

export const HeaderList = styled.ul`
    width: 600px;
    display: flex;
    justify-content: space-between;
    transition: 0.2s ease-in-out;

    @media screen and (max-width: 1200px){
        width: 400px;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 900px){
        width: 200px;
        transition: 0.2s ease-in-out;
    }
`;

export const HeaderItem = styled.li`
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    
    &:hover{
        text-decoration: underline;
    }

    @media screen and (max-width: 900px){
        margin-right: 25px;
    }
`;

export const HeaderUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px;

    @media screen and (max-width: 800px){
        display: none;
    }
`;

export const ButtonSignUp = styled.button`
    width: 100px;
    height: 40px;
    background-color: #fff;
    color: #F37631;
    border: 1px solid #F37631;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;

    &:hover{
        background-color: #F37631;
        color: #fff;
        transition: 0.2s ease-in-out;
    }
`;

export const HeaderMenu = styled.div`
    display: none;
    margin-right: 20px;
    cursor: pointer;

    @media screen and (max-width: 800px){
        display: block;
    }
`;