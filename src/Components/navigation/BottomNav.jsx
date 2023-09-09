import React from 'react'
import { BsHeartPulse } from 'react-icons/bs'
import { HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineLogout, HiOutlineUser, HiOutlineUserGroup } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'

const BottomNav = () => {


    // Side Bar Menu Items
    const MenuItem = [
        {
            path: "/",
            name: "Account",
            icon: < HiOutlineUser/>
        },
        {
            path: "/address",
            name: "Address",
            icon: < HiOutlineLocationMarker/>
        },
        {
            path: "/health",
            name: "Health",
            icon: < BsHeartPulse/>
        },
        {
            path: "/meal_planner",
            name: "Meal Planner",
            icon: < HiOutlineCalendar/>
        },
        {
            path: "/community",
            name: "Communities",
            icon: < HiOutlineUserGroup />
        },
    ]
  return (
    <div>
        {/* Mobile Screen */}
        <aside className={` fixed z-50 top-[90vh] flex md:hidden items-center justify-center w-screen h-20 xs:h-50 bg-secondary text-white rounded-t-[10px] px-2`}>
                <section className=' flex w-full h-full flex-row gap-2 justify-between items-center'>
                    {
                        MenuItem.map((item, index) => (
                            <NavLink
                            to={item.path}
                            key={index}
                            className={({isActive}) =>
                                isActive ? `bg-white text-secondary w-10 h-10 flex flex-col items-center group rounded-lg justify-center px-5 py-[10px] gap-5`: `hover:bg-gray w-10 h-10 flex group flex-col items-center rounded-lg ease-in-out duration-300 transition delay-150 justify-center px-5 py-[10px] relative` }
                            >
                                <div className=' text-lg font-medium '>{item.icon}</div>
                                <div className={` absolute group-hover:flex -top-12 py-1 px-2 rounded-2xl w-fit shadow-custom bg-secondary text-white text-sm duration-200 hidden `}>{item.name}</div>
                            </NavLink>
                        ))
                    }
                    <Link className={` justify-center px-5 py-[10px] gap-5 w-10 h-10 rounded-lg hover:bg-gray ease-in-out duration-300 group transition delay-150 flex flex-row items-center`}>
                        <div className='text-lg font-medium'>< HiOutlineLogout/></div>
                        <div className={` absolute group-hover:flex right-0 -top-12 py-1 px-2 rounded-2xl w-fit shadow-custom bg-secondary text-white text-sm duration-200 hidden `}>Logout</div>
                    </Link>
                </section>
            </aside>
    </div>
  )
}

export default BottomNav