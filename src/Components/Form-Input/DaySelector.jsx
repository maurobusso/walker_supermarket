import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const DaySelector = () => {
    const [day, setDay] = useState("")
    const [open, setOpen] = useState(false)

    const daysOfTheWeek =[
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ]

  return (
    <div className=' w-140 font-medium h-50'>
        <div
            onClick={() => setOpen(!open)}
            className= {
            `bg-white shadow-custom w-full h-full px-5 flex items-center justify-between ${ !day && "text-textColor" } `
        }
        >
            {day
                ? day.length > 8
                    ? day.substring(0,3) +"..."
                    : day
                : `Day`}
            <HiChevronDown size={24} className={` ${ open && " rotate-180"}`} />
        </div>
        <ul className={` bg-white  shadow-custom mt-2 z-40  overflow-y-auto ${open ? " max-h-40" : " max-h-0 " }`}>
            {daysOfTheWeek.map((i, index)=>(
                <li key={index} className={` p-2 text-sm hover:bg-secondary hover:text-white text-textColor hover:border-white transition-all duration-300 ${i === day &&" bg-secondary text-white"}`}
                onClick={() =>{
                    if(i){
                        setDay(i)
                        setOpen(false)
                    }
                }}
                >
                    {i}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default DaySelector