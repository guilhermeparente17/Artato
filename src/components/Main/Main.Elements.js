import styled from "styled-components";

export const MainContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 90%;
    margin-bottom: 30px;

    @media screen and (max-width: 1350px){
        flex-wrap: wrap;
    }
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const MainCarousel = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;

    &::-webkit-scrollbar {
        width: 3px;
        height: 3px; /* A altura só é vista quando a rolagem é horizontal */
    }

    &::-webkit-scrollbar-track {
        background: #ccc;
        padding: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #F87529;
    }
`;

export const MainTitle = styled.h2`
    font-size: 65px;
    font-weight: 500;
    letter-spacing: 7px;
    line-height: 80px;
    margin-bottom: 30px;
    white-space: nowrap;

    @media screen and (max-width: 750px){
        font-size: 30px;
        line-height: 40px;
        letter-spacing: 5px;
    }
`;

export const MainSpan = styled.span`
    color: #F87529;
    font-weight: 700;
    cursor: pointer;
    
    &:hover{
        text-decoration: ${({cursor}) => cursor ? 'underline' : ''};
    }
`;

export const MainP = styled.p`
    margin-bottom: 30px;
    letter-spacing: 2px;
    font-weight: 500;

    @media screen and (max-width: 750px){
        margin-left: 10px;
    }
`;

export const MainButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`;

export const ButtonExplore = styled.button`
    width: 180px;
    height: 60px;
    background-color: #F87529;
    color: #fff;
    margin-right: 40px;
    font-weight: 500;
    border: none;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        background-color: #fff;
        color: #F87529;
        border: 1px solid #F87529;
        transition: 0.2s ease-in-out;
    }
`;

export const MainNumbers = styled.div`
    display: flex;
    height: 50px;
`;

export const MainWrapper = styled.div``;

export const MainNumber = styled.div`
    font-weight: 700;
`;

export const MainSeparator = styled.div`
    margin: 0px 20px;
    width: 2px;
    height: 100%;
    background-color: #000;
`;