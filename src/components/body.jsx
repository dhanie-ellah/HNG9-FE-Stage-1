import React from 'react'
import LinkBtn from './linkBtn'
import { Link } from 'react-router-dom'

const body = () => {
  return (
    <div className='links'>
      <LinkBtn title='Twitter Link' src='https://twitter.com/dhanie_ellah'/>
      <LinkBtn title='Zuri Team' src='https://training.zuri.team/' id='btn__zuri'/>
      <LinkBtn title='Zuri Books' src='https://books.zuri.team/' id='books'/>
      <LinkBtn title='Python Books' src='https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E' id='book__python'/>
      <LinkBtn title='Background Check For Coders' src='https://background.zuri.team/' id='pitch'/>
      <LinkBtn title='Design Books' src='https://books.zuri.team/design-rules' id='book__design' />
      <Link to="/Contact" className='link' id='contact'>Contact us</Link>
    </div>
  )
}

export default body