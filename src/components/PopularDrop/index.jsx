import React from 'react';
import { dataDrop } from '../../dataDrop';
import Card from '../Card';

import {
    PDCards,
    PDContainer, PDSpan, PDTitle
} from './PopularDrop.Elements'

const PopularDrop = () => {
  return (
    <PDContainer>
        <PDTitle>Popular Drop</PDTitle>
        <PDSpan>Find your best suit NFTs Art that you like to <br /> base on you preference</PDSpan>

        <PDCards>
            {
                dataDrop.map((item, index) => {
                    return <Card 
                        margin='15px' 
                        key={index} 
                        item={item}
                        widthContainer={300}
                        heightContainer={350} 
                        heightBg={75}
                    />
                })
            }
        </PDCards>
    </PDContainer>
  )
}

export default PopularDrop