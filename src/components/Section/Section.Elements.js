import styled from "styled-components";

export const SectionContainer = styled.section`
    width: 100%;
    height: 100%;
    padding: 50px 0px;
    background: linear-gradient(#0A0B1F 25%, rgba(10,11,31,0.9) 50%);
`;

export const SectionImg = styled.img`
    width: 375px;
    height: 500px;
    background-position: center;
    background-size: cover;
    margin-right: 50px;
    border-radius: 10px;
`;

export const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
`;

export const SecTitle = styled.h1`
    font-size: 55px;
    letter-spacing: 5px;
    font-weight: 500;
    margin-bottom: 20px;
    text-shadow: 0.1em 0.1em 0.2em black;
`;

export const SecP = styled.p`
    color: rgba(250,250,250, 0.7);
    margin-bottom: 30px;
    letter-spacing: 3px;
`;

export const SectionWrapper = styled.div`
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;