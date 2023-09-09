import React from 'react'

const MealInput = ({id, label, autoComplete, type, handleChange, className, inputFunc, value}) => {

  return (
    <div className='relative w-full'>
      <input type={type} id={id} className={`input peer ${className}`} onInput={inputFunc} autoComplete={autoComplete} onChange={handleChange} value={value} placeholder='' />
      <label htmlFor={id} className=' label'>{label}</label>
    </div>
  )
}

export default MealInput