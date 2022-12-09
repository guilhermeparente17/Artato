import styled from "styled-components";

export const PDContainer = styled.section`
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const PDTitle = styled.h3`
    margin-top: 80px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;

    @media screen and (max-width: 600px){
        font-size: 35px;
    }
`;

export const PDSpan = styled.span`
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;

    @media screen and (max-width: 600px){
        font-size: 20px;
        display: block;
        width: 80%;
    }
`;

export const PDCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: 1360px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 600px){
        grid-template-columns: repeat(1, 1fr);
    }
`;