import React from 'react'

import {
    CardContainer,
    CardBg,
    CardUsers,
    CardUser,
    CardContent,
    CardWrapper,
    CardTitle,
    CardP,
    CardPrice
} from './Card.Elements'

const Card = ({ item, key, margin, widthContainer, heightContainer, heightBg }) => {
  return (
    <CardContainer key={key} margin={margin} widthContainer={widthContainer} heightContainer={heightContainer} >
        <CardBg widthContainer={widthContainer} heightBg={heightBg} style={{backgroundImage: `url(${item.bg})`}}>
            
        </CardBg>
        <CardUsers>
            <CardUser src={item.comments.image1} />
            <CardUser src={item.comments.image2} />
            <CardUser src={item.comments.image3} />
        </CardUsers>

        <CardContent>
            <CardWrapper>
                <CardTitle>{item.name}</CardTitle>
                <CardP>by {item.user}</CardP>
            </CardWrapper>
            <CardPrice>{item.eth} ETH</CardPrice>
        </CardContent>
    </CardContainer>
  )
}

export default Card