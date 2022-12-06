import React from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Section from '../../components/Section'
import GlobalStyle from '../../GlobalStyle'

const Home = () => {
  return (
    <div>
        <GlobalStyle />
        <Header />
        <Main />
        <Section />
    </div>
  )
}

export default Home