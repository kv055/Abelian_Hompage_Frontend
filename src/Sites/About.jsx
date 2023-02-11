import React from 'react';

import Logo from '../assets/logo.png'
import Kilian from '../assets/Passfoto.jpg'

import Header from '../components/header';
import Footer from '../components/footer'

const About_Us_Page = () => {
    
    return (
        <div className='h-screen flex flex-col items-center justify-start px-10'>
            <Header></Header>
            {/* Content */}
            <div className='bg-violet-200'>
                <h3 className='RobotoCondensed text-center font-semibold tracking-widest text-2xl m-5'>The Team</h3>
                <div className='flex items-center justify-center flex-wrap'>
                    <div className='flex-col m-10 w-2/3'>
                        <h5 className='RobotoCondensed text-start  text-indigo-700 font-extrabold tracking-widest'>William Godfrey</h5>
                        <h6 className='RobotoCondensed text-start'>CEO and Financial Engineering</h6>
                        <div className='flex flex-row'>
                            <img 
                                src={Logo} 
                                alt="Logo" 
                                className="m-10 w-1/2 md:w-1/2 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900"
                            />
                            <p className='m-10 RobotoCondensed'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className='flex-col m-10 w-2/3'>
                        <h5 className='RobotoCondensed text-start  text-indigo-700 font-extrabold tracking-widest'>Kilian Voss</h5>
                        <h6 className='RobotoCondensed text-start'>Strategy Developement</h6>
                        <div className='flex flex-row'>
                            <p className='my-10 mr-10 RobotoCondensed'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p> 
                            <img 
                                src={Logo} 
                                alt="Logo" 
                                className="m-10 w-1/2 md:w-1/2 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900"
                            />    
                        </div>
                       
                    </div>
                    <div className='flex-col m-10 w-2/3'>
                        <h5 className='RobotoCondensed text-start  text-indigo-700 font-extrabold tracking-widest'>Lachlan Steele</h5>
                        <h6 className='RobotoCondensed text-start'>Developement Infrastructure</h6>
                        <div className='flex flex-row'>
                             <img 
                                src={Logo} 
                                alt="Logo" 
                                className="m-10 w-1/2 md:w-1/2 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900"
                            />
                            <p className='m-10 RobotoCondensed'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>     
                        </div>
                       
                    </div>
                    <div className='flex-col m-10 w-2/3'>
                        <h5 className='RobotoCondensed text-start  text-indigo-700 font-extrabold tracking-widest'>Fortino Gomez</h5>
                        <h6 className='RobotoCondensed text-start'>Backtesting</h6>
                        <div className='flex flex-row'>
                            <p className='my-10 mr-10 RobotoCondensed'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p> 
                            <img 
                                src={Logo} 
                                alt="Logo" 
                                className="m-10 w-1/2 md:w-1/2 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900"
                            />  
                        </div>
                       
                    </div>
                    <div className='flex-col m-10 w-2/3'>
                        <h5 className='RobotoCondensed text-start  text-indigo-700 font-extrabold tracking-widest'>Pat Nguyen</h5>
                        <h6 className='RobotoCondensed text-start'>Backtesting</h6>
                        <div className='flex flex-row'>
                             <img 
                                src={Logo} 
                                alt="Logo" 
                                className="m-10 w-1/2 md:w-1/2 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900"
                            />
                            <p className='m-10 RobotoCondensed'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>     
                        </div>
                       
                    </div>
                    <div className='flex-col m-10 w-2/3'>
                        <h5 className='RobotoCondensed text-start  text-indigo-700 font-extrabold tracking-widest'>Aleks Lyubinov</h5>
                        <h6 className='RobotoCondensed text-start'>Backtesting</h6>
                        <div className='flex flex-row'>
                            <p className='my-10 mr-10 RobotoCondensed'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <img 
                                src={Logo} 
                                alt="Logo" 
                                className="m-10 w-1/2 md:w-1/2 lg:w-1/2 mx-auto mb-6 shadow-2xl shadow-violet-900"
                            />    
                        </div>
                       
                    </div>
                </div>
                
                <h3 className='RobotoCondensed text-center font-semibold tracking-widest text-2xl m-5'>Contact Us</h3>
                <div className='flex flex-row justify-center'>
                    <p className='RobotoCondensed mx-10 '>LinkedIn</p>
                    <p className='RobotoCondensed mx-10 '>Email</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default About_Us_Page;
