import React from 'react'

const link = ({title, src, id}) => {
  return (
    <div className='link'>
      <a id={id} href={src} rel='noreferrer' target='_blank'>{title}</a>
    </div>
  )
}

export default link