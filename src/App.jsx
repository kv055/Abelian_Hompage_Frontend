import React from "react";

// import './App.css'
import Logo from './assets/logo.png'

function App() {
  return (
    <div className="bg-white h-screen flex flex-col items-center justify-start m-10">
      <div className="">
        <img src={Logo} alt="Logo" className="w-1/2 md:w-1/2 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900" />
      </div>
      <nav className="flex flex-row flex-wrap m-20">
        <a href="#" className="RobotoCondensed hover:underline mr-6 ml-6 text-lg cursor-pointer text-indigo-700">
          About Us
        </a>
        <a href="#" className="RobotoCondensed hover:underline mr-6 ml-6 text-lg cursor-pointer text-indigo-700">
          Methodology/Vision
        </a>
        <a href="#" className="RobotoCondensed hover:underline mr-6 ml-6 text-lg cursor-pointer text-indigo-700">
          User Login
        </a>
        <a href="#" className="RobotoCondensed hover:underline mr-6 ml-6 text-lg cursor-pointer text-indigo-700">
          Terminal Demo
        </a>
      </nav>
    </div>
  );
}
// There are a few other possibilities that could be causing the w-1/2 and h-1/2 classes not to work as expected:

// The w-1/2 and h-1/2 classes are not being imported into your CSS file. Make sure that you are importing the correct CSS file that contains the Tailwind classes, and that the file is correctly linked to your HTML file.

// There is another CSS class or style that is overriding the w-1/2 and h-1/2 classes. Make sure that the img element does not have any CSS styles applied to it that might be conflicting with the Tailwind classes.

// The image path passed to the src attribute might be incorrect. Make sure the path to the image is correctly pointing to the image file

// The version of the tailwindcss you are using doesn't support the responsive width you set. check the version that you are using and check their documentations if the class w-1/2 exist or not

// I recommend double-checking that the Tailwind CSS file is imported correctly, and making sure that the img element does not have any conflicting CSS styles. You can also check the path of the image and its existence to see if it is available and loaded.

// Let me know if you need any more help, I'm happy to assist.






export default App;
