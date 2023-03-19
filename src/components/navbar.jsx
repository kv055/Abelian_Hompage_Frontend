import React from 'react'
import { Selected_Site_Context } from '../context_test'

const navbar = () => {
    const {Selected_Site, set_Selected_Site} = React.useContext(Selected_Site_Context)
    return (
        <nav className="flex flex-col text-center md:flex-row sm:text-right my-20">
            <a href="#" 
            className="RobotoCondensed
                hover:underline 
                mr-6 ml-6 
                text-lg 
                cursor-pointer 
                text-indigo-700
                font-medium 
                tracking-widest
                "
            onClick={() => set_Selected_Site("About Us")}
            >
                About Us
            </a>
            <a href="#" 
            className="RobotoCondensed
                hover:underline 
                mr-6 ml-6 
                text-lg 
                cursor-pointer 
                text-indigo-700
                font-medium 
                tracking-widest
                "
            onClick={() => set_Selected_Site("Methodology & Vision")}
            >
                Methodology/Vision
            </a>
            <a href="#" 
            className="RobotoCondensed
                hover:underline 
                mr-6 ml-6 
                text-lg 
                cursor-pointer 
                text-indigo-700
                font-medium 
                tracking-widest
                "
            onClick={() => set_Selected_Site("User Login")}
            >
                User Login
            </a>
            <a href="#" 
            className="RobotoCondensed
                hover:underline 
                mr-6 ml-6 
                text-lg 
                cursor-pointer 
                text-indigo-700
                font-medium 
                tracking-widest
                "
            onClick={() => set_Selected_Site("Blog")}
            >
                Blog
            </a>
        </nav>
    )
}
export default navbar