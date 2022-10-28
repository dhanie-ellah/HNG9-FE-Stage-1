import React from 'react'
import Link from './link'

const body = () => {
  return (
    <div className='links'>
      <Link title='Twitter Link' src='https://twitter.com/dhanie_ellah'/>
      <Link title='Zuri Team' src='https://training.zuri.team/' id='btn__zuri'/>
      <Link title='Zuri Books' src='https://books.zuri.team/' id='books'/>
      <Link title='Python Books' src='https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E' id='book__python'/>
      <Link title='Background Check For Coders' src='https://background.zuri.team/' id='pitch'/>
      <Link title='Design Books' src='https://books.zuri.team/design-rules' id='book__design'/>
    </div>
  )
}

export default body