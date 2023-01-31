import React from "react";
import { Selected_Site_Context } from "../context_test";
import Logo from '../assets/logo.png'


function Landing_Page() {
    const {Selected_Site, set_Selected_Site} = React.useContext(Selected_Site_Context)

    return (
        <div className="bg-white h-screen flex flex-col items-center justify-start m-10">
            <div className="">
                <img 
                    src={Logo} 
                    alt="Logo" 
                    className="w-1/2 md:w-1/2 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900"
                />
            </div>
            <nav className="flex flex-row flex-wrap m-20">
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
                onClick={() => set_Selected_Site("About_Page")}
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
                onClick={() => set_Selected_Site("Methodology_Vision_Page")}
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
                onClick={() => set_Selected_Site("User_Login_Page")}
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
                onClick={() => set_Selected_Site("Blog_Page")}
                >
                    Blog
                </a>
            </nav>
        </div>
    );
  }
  
  
  export default Landing_Page;