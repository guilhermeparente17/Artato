import React, { useState } from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Section from '../../components/Section'
import Sidebar from '../../components/Sidebar'
import GlobalStyle from '../../GlobalStyle'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
        <GlobalStyle />
        <Header isOpen={isOpen} toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Main />
        <Section />
    </div>
  )
}

export default Home