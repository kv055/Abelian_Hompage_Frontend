import React from 'react';
import { Selected_Site_Context } from '../context_test';
import Logo from '../assets/logo.png'

const User_Login_Page = () => {
  const {Selected_Site, set_Selected_Site} = React.useContext(Selected_Site_Context)

  return (
    <div>
        <div className="">
            <img 
              src={Logo} 
              alt="Logo" 
              className="w-1/3 md:w-1/3 lg:w-1/3 mx-auto mb-6 shadow-2xl shadow-violet-900"
              onClick={() => set_Selected_Site("Landing Page")} 
            />
            <h1 className='RobotoCondensed'>User LogIn</h1>
        </div>
        <div>
            <h5 className='RobotoCondensed'>User Name</h5>
            <form></form>
            <h5 className='RobotoCondensed'>User Password</h5>
            <form></form>
            <button>LogIn</button>
        </div>    
    </div>
  );
}

export default User_Login_Page;
