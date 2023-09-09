import React from 'react'

const TextBox = ({id, label, type, changeFunc, className, value}) => {

  return (
    <div className='relative'>

      <textarea className={`${className} peer text_area`} value={value} onChange={changeFunc} >
      </textarea>
      <label htmlFor={id} className=' label'>{label}</label>
    </div>
  )
}

export default TextBox