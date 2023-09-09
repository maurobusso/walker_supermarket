import React, { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const MealSelector = () => {
    const [meals, setMeals] = useState("")
    const [open, setOpen] = useState(false)

    const mealTime =[
        "Breakfast", "First Snack (Optional)", "Lunch", "Second Snack (Optional)", "Dinner"
    ]

  return (
    <div className=' w-140 font-medium h-50'>
        <div
            onClick={() => setOpen(!open)}
            className= {
            `bg-white shadow-custom w-full h-full px-5 flex items-center justify-between ${ !meals && "text-textColor" } `
            }
        >
            {meals
                ? meals.length > 8
                    ? meals.substring(0,7) +"..."
                    : meals
                : `Meal`}
            <HiChevronDown size={24} className={` ${ open && " rotate-180"}`} />
        </div>
        <ul className={` bg-white  shadow-custom mt-2 z-40  overflow-y-auto ${open ? " max-h-40" : " max-h-0 " }`}>
            {mealTime.map((meal, index)=>(
                <li key={index} className={` p-2 text-sm hover:bg-secondary hover:text-white text-textColor hover:border-white transition-all duration-300 ${meal === meals &&" bg-secondary text-white"}`}
                onClick={() =>{
                    if(meal){
                        setMeals(meal)
                        setOpen(false)
                    }
                }}
                >
                    {meal}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MealSelector