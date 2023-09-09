import React from 'react'
import Ellipse from "../../Assets/icons/Ellipse.jpg"

const DailyInput = ({className, id, label, value}) => {
  return (
    <div className='relative '>
        <img src={Ellipse} className=' absolute w-2 h-2 top-5 left-2' alt={id} />
      <input type= "text" id={id} required className={`text-textColor h-10 shadow-custom bg-white pl-5 pr-[5px] pt-2.5 border-b-2 border-b-primary bg-opacity-70 text-base transition-colors duration-500 peer ${className}`} disabled value={value} placeholder='' />

      <label
        htmlFor={id}
        className=' text-xs font-normal text-secondary top-[2px] opacity-100 transition-all duration-500 absolute left-2.5 '>{label}</label>
    </div>
  )
}

export default DailyInput