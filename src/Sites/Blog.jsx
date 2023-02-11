import React from 'react';

import Logo from '../assets/logo.png'
import Header from '../components/header';
import Footer from '../components/footer'

const Blog_Page = () => {

  return (
    <div className='h-screen flex flex-col items-center justify-start px-10'>
        <Header></Header>
        <div className='bg-violet-200 flex items-center justify-center flex-wrap'>
            <div className='flex-col w-2/3 m-10'>
              <h5 className='RobotoCondensed text-start  text-indigo-700 font-extrabold tracking-widest'>News Headline</h5>
              <h6 className='RobotoCondensed mb-10'>Date</h6>
              <p className='RobotoCondensed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className='flex-col w-2/3 m-10'>
              <h5 className='RobotoCondensed text-start  text-indigo-700 font-extrabold tracking-widest'>Next News Headline</h5>
              <h6 className='RobotoCondensed mb-10'>Date</h6>
              <p className='RobotoCondensed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default Blog_Page;