import React from 'react'
import DailyInput from './DailyInput'

const DayComponent = () => {
  return (
    <div className=' w-300 bg-secondary flex flex-col items-center justify-between px-2.5 py-[25px] rounded-xl h-340 text-xl font-medium text-primary'>
        {`Monday`}
        <DailyInput className={` w-full `} id={`mrn-meal`} label={"Breakfast"} value={`Tea and Bread`} />
        <DailyInput className={` w-full `} id={`mrn-meal`} label={"Breakfast"} value={`Tea and Bread`} />
        <DailyInput className={` w-full `} id={`mrn-meal`} label={"Breakfast"} value={`Tea and Bread`} />
        <DailyInput className={` w-full `} id={`mrn-meal`} label={"Breakfast"} value={`Tea and Bread`} />
        <DailyInput className={` w-full `} id={`mrn-meal`} label={"Breakfast"} value={`Tea and Bread`} />
    </div>
  )
}

export default DayComponent