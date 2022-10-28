import React from 'react'
import shareIcon from '../Assets/_Avatar share button.png'
import avatar from '../Assets/profile__img.png'

const header = () => {
  return (
    <header id='profile__img'>
      <div className="share-icon">
        <img src={shareIcon} alt="Share Icon" />
      </div>
      <div className="profile-image">
        <img src={avatar} alt="Profile" />
      </div>
      <h3 id='twitter'>dhanie_ellah</h3>
    </header>
  )
}

export default header