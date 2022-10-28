import React from 'react'
import slack from '../Assets/slack.png'
import github from '../Assets/Social icon.png'

const socials = () => {
  return (
    <div className='socials'>
      <img src={slack} alt="slack icon" />
      <img src={github} alt="github icon" />
    </div>
  )
}

export default socials