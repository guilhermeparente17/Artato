import React from 'react'
import { FNav, FooterContainer, FSocial, FSpan, Item, List, Logo, FWhats, FInstagram, FLinkedin } from './Footer.Elements';
import LogoCoruja from '../../assets/images/coruja2.png';

const Footer = () => {
  return (
    <FooterContainer>
        <Logo src={LogoCoruja} />

        <FNav>
            <List>
                <Item>Artist</Item>
                <Item>ArtWork</Item>
                <Item>Community</Item>
                <Item>About Us</Item>
                <Item>Contact</Item>
            </List>
        </FNav>

        <FSocial>
            <FWhats size="30" />
            <FInstagram size="30"  />
            <FLinkedin size="30" />
        </FSocial>
    </FooterContainer>
  )
}

export default Footer