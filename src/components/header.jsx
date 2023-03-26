import React from 'react'
import Navbar from './navbar'
import Logo from '../assets/logo.png'
import Go_Back_Icon from '../assets/arrow-left-circle.png'
import { Selected_Site_Context } from '../context_test'

const header = () => {
    const {Selected_Site, set_Selected_Site} = React.useContext(Selected_Site_Context)
  return (
    <div className="bg-white p-5 flex flex-col sm:flex-row">
        <div className='sm:w-2/6 md:w-1/6 xl:max-w-lg text-left'>
            <img 
                src={Logo}
                alt="Logo" 
                className="w-1/8 shadow-2xl shadow-violet-900"
                onClick={() => set_Selected_Site("Landing Page")}
            />
        </div>
        <div className='sm:w-4/6 md:w-5/6 flex flex-col items-center sm:items-end'>
            <div className='flex flex-row items-end justify-end'>
                {/* <p 
                    className='RobotoCondensed text-indigo-700 tracking-widest font-semibold text-lg mr-20 cursor-pointer'
                    onClick={() => set_Selected_Site("Landing Page")}
                >
                    ... go back
                </p> */}
                {/* <img 
                    src={Go_Back_Icon}
                    className="sm:hidden md:w-1/12 lg:w-1/12 mr-20 cursor-pointer"
                    onClick={() => set_Selected_Site("Landing Page")}
                /> */}
                <h1 className='RobotoCondensed text-indigo-700 font-extrabold md:font-semibold xl:font-bold tracking-widest sm:text-xl md:text-3xl xl:text-6xl pt-20 sm:pt-5'>{Selected_Site}</h1>
            </div>
            <Navbar></Navbar>
        </div>

    </div>
  )
}

export default header
