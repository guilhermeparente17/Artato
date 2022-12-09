import React from 'react'

import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap,LogoArtato } from './Sidebar.Elements'
import Logo from '../../assets/images/coruja2.png';

const Sidebar = ({toggle, isOpen}) => {
  return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
          <CloseIcon />
      </Icon>
      <SidebarWrapper>
          <LogoArtato src={Logo} />
          <SidebarMenu>
              <SidebarLink to="about" onClick={toggle}>Artist</SidebarLink>
              <SidebarLink to="discover" onClick={toggle}>ArtWork</SidebarLink>
              <SidebarLink to="services" onClick={toggle}>Community</SidebarLink>
              <SidebarLink to="services" onClick={toggle}>Login</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
              <SidebarRoute to="/signin">Sign Up</SidebarRoute>
          </SideBtnWrap>
      </SidebarWrapper>
  </SidebarContainer>
  )
}

export default Sidebar