import React from 'react'


const SelectInput = ({className, placeholder, options, handleChange, value}) => {

  return (
    <div className=' w-full relative'>
        <select
        value={value}
        onChange={handleChange}
        className ={`${className} `}
        placeholder={placeholder}
        required
      >
        {options.map((option)=>(
                <option
                  key={option.value}
                  className={` text-textColor text-base font-normal`}
                  value={option.value}
                >
                  {option.label}
                </option>
            ))}
      </select>
      <div className='select-arrow w-[15px] h-2 bg-contain absolute top-[45%]  right-3 '/>
    </div>
  )
}

export default SelectInput