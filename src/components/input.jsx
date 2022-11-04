import React from 'react'

const input = ({id, label, input_type, placeholder}) => {
  return (
    <div className={id}>
      <label htmlFor={id}>{label}</label>
      <input type={input_type} placeholder={placeholder} id={id} />
    </div>
  )
}

export default input