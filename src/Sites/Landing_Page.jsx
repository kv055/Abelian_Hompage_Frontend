import React from "react";

import Logo from '../assets/logo.png'
import Navbar from '../components/navbar'

function Landing_Page() {

    return (
        <div className="bg-white h-screen flex flex-col items-center justify-start m-10">
            <div className="">
                <img 
                    src={Logo} 
                    alt="Logo" 
                    className="w-1/2 md:w-1/2 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900"
                />
            </div>
            <Navbar></Navbar>
        </div>
    );
  }
  
  
  export default Landing_Page;