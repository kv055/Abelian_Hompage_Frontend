import React from "react";

// import './App.css'
import Logo from './assets/logo.png'

// Linked Sites
import About_Us_Page from "./Sites/About";
import Methodology_Vision_Page from "./Sites/Methodology_Vision";
import User_Login_Page from "./Sites/User_Login";

function App() {
  const [Selected_Site, set_Selected_Site] = React.useState("Landing Page");
  console.log(Selected_Site)

  return (
    <div className="bg-white h-screen flex flex-col items-center justify-start m-10">
      <div className="">
        <img 
          src={Logo} 
          alt="Logo" 
          className="w-1/2 md:w-1/2 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900"
          // onClick={set_Selected_Site("Landing Page")}
          />
      </div>
      <nav className="flex flex-row flex-wrap m-20">
        <a href="#" 
        className="RobotoCondensed
          hover:underline 
          mr-6 ml-6 
          text-lg 
          cursor-pointer 
          text-indigo-700"
        // onClick={set_Selected_Site("About Us")}
        >
          About Us
        </a>
        <a href="#" 
        className="RobotoCondensed
          hover:underline 
          mr-6 ml-6 
          text-lg 
          cursor-pointer 
          text-indigo-700"
        // onClick={set_Selected_Site("Methodology Vision")}
        >
          Methodology/Vision
        </a>
        <a href="#" 
        className="RobotoCondensed
          hover:underline 
          mr-6 ml-6 
          text-lg 
          cursor-pointer 
          text-indigo-700"
        // onClick={set_Selected_Site("User Login")}
        >
          User Login
        </a>
        <a href="#" 
        className="RobotoCondensed
          hover:underline 
          mr-6 ml-6 
          text-lg 
          cursor-pointer 
          text-indigo-700"
        // onClick={set_Selected_Site("Terminal Demo")}
        >
          Terminal Demo
        </a>
      </nav>
    </div>
  );
}


export default App;
