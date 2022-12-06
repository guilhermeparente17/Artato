import React from 'react'

import {
    SectionContainer,
    SectionImg,
    SectionContent,
    SecTitle,
    SecP,
    SectionWrapper
} from './Section.Elements'

import Image from '../../assets/images/bg2.jpg';
import Comments from '../Comments';
import { dataComments } from '../../dataComments';

const Section = () => {
  return (
    <SectionContainer>
        <SectionWrapper>
            <SectionImg src={Image} />

            <SectionContent>
                <SecTitle>Our Key Features</SecTitle>

                <SecP>
                    We always provider the best service and features to out customers make <br /> 
                    them happy when they buy art from out website.
                </SecP>

                {dataComments.map((item,index) => {
                    return (
                        <Comments key={index} item={item} />
                    )
                })}
            </SectionContent>
        </SectionWrapper>
    </SectionContainer>
  )
}

export default Section