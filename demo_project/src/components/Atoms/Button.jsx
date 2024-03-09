import React from 'react'

const Button = () => {
  return (
    <div>
      <button onClick={onclick} style={{backgroundColor:color}}>{content}</button>
    </div>
  )
}

export default Button;
