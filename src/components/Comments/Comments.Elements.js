import styled from "styled-components";

export const CommentsContainer = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CommentsId = styled.h1`
    font-size: 30px;
    font-weight: 500;
`;

export const CommentsName = styled.span`
    font-size: 20px;
    font-weight: 500;
`;

export const CommentsResponse = styled.p`
    color: rgba(250,250,250,0.7);
    word-break: break-all;
`;

export const CommentsContent = styled.div`
    display: flex;
`;

export const Steps = styled.div`
    display: flex;
    width: 150px;
    height: 50px;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
`;

export const Step = styled.div`
    background-color: transparent;
    width: 20px;
    height: 20px;
    padding: 15px;
    border-radius: 50%;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        background-color: #0A0B1F;
        transition: 0.2s ease-in-out;
    }
`;