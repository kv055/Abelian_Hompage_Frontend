import React from 'react';
import { Selected_Site_Context } from '../context_test';
import Logo from '../assets/logo.png'

const User_Login_Page = () => {
  const {Selected_Site, set_Selected_Site} = React.useContext(Selected_Site_Context)

  return (
    <div className='h-screen flex flex-col items-center justify-start'>
        {/* Header */}
        <div className="bg-white">
            <img 
                src={Logo} 
                alt="Logo" 
                className="w-1/4 md:w-1/4 lg:w-1/6 mx-auto mb-6 shadow-2xl shadow-violet-900"
                onClick={() => set_Selected_Site("Landing Page")}
            />  
            <h1 className='RobotoCondensed text-center text-indigo-700 font-extrabold tracking-widest'>User LogIn</h1>
        </div>
        {/* Content */}
        <div className='bg-violet-200'>
          <div className='flex flex-row m-3.5'>
            <h5 className='RobotoCondensed mx-10'>User Name</h5>
            <form>
              <input type="text" placeholder="Enter your username here" className='rounded-lg p-2'/>
            </form>
            <h5 className='RobotoCondensed mx-10'>User Password</h5>
            <form>
              <input type="password" placeholder="Enter your password here" className='rounded-lg p-2'/>
            </form>
            <button className='mx-10 bg-indigo-600 px-10 rounded-lg'>LogIn</button>
          </div>
        </div>    
    </div>
  );
}

export default User_Login_Page;
