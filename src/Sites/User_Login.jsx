import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer'

const User_Login_Page = () => {

  return (
    <div className='h-screen flex flex-col items-center justify-start px-10'>
        <Header></Header>
        {/* Content */}
        <div className='bg-violet-200 flex-wrap w-full items-center'>
          <h3 className='RobotoCondensed text-center font-semibold tracking-widest text-2xl m-5'>Login for a Demo version of the AC Terminal</h3>
          <div className='flex flex-col justify-center mx-auto m-10 items-center'>
            <h5 className='RobotoCondensed mx-10'>User Name</h5>
            <form>
              <input type="text" placeholder="Enter your username here" className='rounded-lg p-2'/>
            </form>
            <br></br>
            <h5 className='RobotoCondensed mx-10'>User Password</h5>
            <form>
              <input type="password" placeholder="Enter your password here" className='rounded-lg p-2'/>
            </form>
            <button className='m-10 bg-indigo-600 px-10 py-1 rounded-lg'>LogIn</button>
          </div>
        </div>

        <Footer></Footer>  
    </div>
  );
}

export default User_Login_Page;
