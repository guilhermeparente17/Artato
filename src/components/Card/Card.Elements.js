import styled from "styled-components";

export const CardContainer = styled.div`
    width: ${({widthContainer}) => widthContainer ? `${widthContainer}px` : '400px'};
    height: ${({heightContainer}) => heightContainer ? `${heightContainer}px` : '550px'};
    margin: 0px 15px;
    background-color: #fff;
    box-shadow: 0 0px 20px -2px gray;
    margin: 50px 20px;
    border-radius: 0px 0px 10px 10px;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        scale: 1.1;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 1210px){
        width: 250px;
        height: 350px;
    }

    @media screen and (max-width: 600px){
        margin: ${({margin}) => margin};
    }
`;

export const CardBg = styled.div`
    width: ${({widthContainer}) => widthContainer ? `${widthContainer}px` : '400px'};
    height:${({heightBg}) => heightBg ? `${heightBg}%` : '85%'};
    border-radius: 5px;
    background-position: center;
    background-size: cover;
    
    @media screen and (max-width: 1210px){
        width: 250px;
        height: 75%;
    }
`;

export const CardUsers = styled.div`
    margin-left: 10px;
`;

export const CardUser = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-top: -20px;
`;

export const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardTitle = styled.div`
    font-weight: 700;
`;

export const CardP = styled.div`
    font-weight: 400;
`;

export const CardPrice = styled.div`
    font-weight: 700;
    color: #F87529;
`;