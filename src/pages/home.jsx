import React from 'react'
import '../App.css';
import Footer from '../components/footer'
import Header from '../components/header'
import Body from '../components/body'
import Socials from '../components/socials'

const home = () => {
  return (
    <div>
      <Header />
      <Body />
      <Socials/>
      <hr/>
      <Footer />
    </div>
  )
}

export default home