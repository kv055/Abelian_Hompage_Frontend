import React from 'react';

import Logo from '../assets/logo.png'
import Header from '../components/header';
import Footer from '../components/footer'

const User_Login_Page = () => {

  return (
    <div className='h-screen flex flex-col items-center justify-start px-10'>
        <Header></Header>
        {/* Content */}
        <div className='bg-violet-200 flex-wrap w-full items-center'>
          <div className='flex flex-row w-2/3 m-10 '>
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
        <Footer></Footer>  
    </div>
  );
}

export default User_Login_Page;
