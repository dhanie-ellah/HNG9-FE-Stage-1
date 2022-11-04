import React from 'react'
import './footer.css'
import zuriLogo from '../Assets/Zuri.Internship_Logo.png'
import i4gLogo from '../Assets/I4G.png'

const footer = () => {
  return (
    <footer>
      <img src={zuriLogo} alt="Zuri Logo" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={i4gLogo} alt="I4G Logo" />
    </footer>
  )
}

export default footer