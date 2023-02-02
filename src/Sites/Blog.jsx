import React from 'react';
import { Selected_Site_Context } from '../context_test';
import Logo from '../assets/logo.png'

const Blog_Page = () => {
  const {Selected_Site, set_Selected_Site} = React.useContext(Selected_Site_Context)

  return (
    <div className='h-screen flex flex-col items-center justify-start px-10'>
        {/* Header */}
        <div className="bg-white pt-1">
            <img 
                src={Logo} 
                alt="Logo" 
                className="w-1/4 md:w-1/4 lg:w-1/6 mx-auto mb-6 shadow-2xl shadow-violet-900"
                onClick={() => set_Selected_Site("Landing Page")}
            />
            <h1 className='RobotoCondensed text-center text-indigo-700 font-extrabold tracking-widest'>Blog</h1>
        </div>
        {/* Content */}
        <div className='bg-violet-200 flex flex-row m-3.5'>
            <div className='flex flex-col mx-10'>
              <h5 className='RobotoCondensed text-center m-5'>News Headline</h5>
              <p className='RobotoCondensed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className='flex flex-col mx-10'>
              <h5 className='RobotoCondensed text-center m-5'>Next News Headline</h5>
              <p className='RobotoCondensed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
        </div>
    </div>
  );
}

export default Blog_Page;