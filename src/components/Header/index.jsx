import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {
    HeaderContainer,
    HeaderLogo,
    HeaderImg,
    HeaderTitle,
    HeaderNav,
    HeaderList,
    HeaderItem,
    HeaderUser,
    ButtonSignUp,
    HeaderMenu
} from './Header.Elements'

import Logo from '../../assets/images/coruja.png';

const Header = ({toggle}) => {
  return (
    <HeaderContainer>
        <HeaderLogo>
            <HeaderImg src={Logo} />
            <HeaderTitle>Artato</HeaderTitle>
        </HeaderLogo>

        <HeaderNav>
            <HeaderList>
                <HeaderItem>Artist</HeaderItem>
                <HeaderItem>Artwork</HeaderItem>
                <HeaderItem>Community</HeaderItem>
            </HeaderList>
        </HeaderNav>

        <HeaderUser>
            <HeaderTitle mRight={20}>Login</HeaderTitle>
            <ButtonSignUp>Sign Up</ButtonSignUp>

        </HeaderUser>

        <HeaderMenu onClick={() => toggle()}>
            <GiHamburgerMenu size="30" color="#F37631" />
        </HeaderMenu>
        
    </HeaderContainer>
  )
}

export default Header