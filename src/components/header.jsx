import React from 'react'
import Navbar from './navbar'
import Logo from '../assets/logo.png'
import { Selected_Site_Context } from '../context_test'

const header = () => {
    const {Selected_Site, set_Selected_Site} = React.useContext(Selected_Site_Context)
  return (
    <div className="bg-white p-5 flex">
        <div className='w-1/2 text-left'>
            <img 
                src={Logo}
                alt="Logo" 
                className="md:w-1/4 lg:w-1/4 shadow-2xl shadow-violet-900"
                onClick={() => set_Selected_Site("Landing Page")}
            />
        </div>
        <div className='w-1/2 flex flex-col items-end justify-end'>
            <h1 className='RobotoCondensed text-indigo-700 font-semibold tracking-widest text-6xl'>{Selected_Site}</h1>
            <Navbar></Navbar>
        </div>
    </div>
  )
}

export default header
