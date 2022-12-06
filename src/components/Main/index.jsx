import React from 'react'
import { data } from '../../data.js';
import Card from '../Card/index.jsx';

import {
    MainContainer,
    MainContent,
    MainTitle,
    MainSpan,
    MainP,
    MainButtons,
    ButtonExplore,
    MainCarousel,
    MainNumbers,
    MainWrapper,
    MainNumber,
    MainSeparator
} from './Main.Elements'

const Main = () => {
  return (
    <MainContainer>
        <MainContent>
            <MainTitle>Discover rare <br />abstract paiting<br /> and collect 
            <MainSpan> NFTs</MainSpan>
            </MainTitle>

            <MainP>
                Digital marketplace for crypto collectibles and ron-fungible <br/>
                tokens (NFTs) Buy, sell and discovery exclusive digital assets.
            </MainP>

            <MainButtons>
                <ButtonExplore>Explore</ButtonExplore>
                <MainSpan cursor={true}>Lean More</MainSpan>
            </MainButtons>

            <MainNumbers>
                <MainWrapper>
                    <MainNumber>9481+</MainNumber>
                    <MainP>Items</MainP>
                </MainWrapper>

                <MainSeparator />

                <MainWrapper>
                    <MainNumber>321ETH+</MainNumber>
                    <MainP>Actions</MainP>
                </MainWrapper>

                <MainSeparator />
                
                <MainWrapper>
                    <MainNumber>+12K</MainNumber>
                    <MainP>Amount</MainP>
                </MainWrapper>

                <MainSeparator />
                
            </MainNumbers>
        </MainContent>

        <MainCarousel>
            {data.map((item, index) => {
                return(
                    <Card key={index} item={item} />
                )
            })}
        </MainCarousel>
    </MainContainer>
  )
}

export default Main