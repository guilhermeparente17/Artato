import React from 'react'

import {
    HeroBg,
    HeroBtnWrapper,
    HeroContent,
    HeroH1,
    HeroP,
    SectionContainer,
    VideoBg,
    HeroSpan
} from './Section.Elements'

import Video from '../../assets/videos/video.mp4';
import Lottie from 'react-lottie';
import ArrowBottom from '../../assets/lotties/96084-arrow.json';


const Section = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ArrowBottom,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <SectionContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>

        <HeroContent>
            <HeroH1>Discover rare
                abstract paiting
                and collect <HeroSpan>NFTs</HeroSpan>
            </HeroH1>
            <HeroP>
                Discover new pictures for your profile
            </HeroP>
            <HeroBtnWrapper>
                <Lottie 
                    options={defaultOptions}
                    height={120}
                    width={120}
                />
            </HeroBtnWrapper>
            </HeroContent>
        
    </SectionContainer>
  )
}

export default Section