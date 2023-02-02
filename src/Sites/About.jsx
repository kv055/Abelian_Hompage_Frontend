import React from 'react';
import { Selected_Site_Context } from '../context_test';
import Logo from '../assets/logo.png'
import Kilian from '../assets/Passfoto.jpg'

const About_Us_Page = () => {
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
                <h1 className='RobotoCondensed text-center text-indigo-700 font-extrabold tracking-widest'>About Us</h1>
            </div>
            {/* Content */}
            <div className='bg-violet-200'>
                <h3 className='RobotoCondensed text-center font-semibold tracking-widest'>The Team</h3>
                <div className='flex flex-row'>
                    <div className='flex flex-col mx-10 border-solid border-b-lime-700'>
                        <h5 className='RobotoCondensed text-center'>William Godfrey</h5>
                        <h6 className='RobotoCondensed text-center'>CEO and Financial Engineering</h6>
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            className="w-1/3 md:w-1/3 lg:w-1/3 mx-auto mb-6 shadow-2xl shadow-violet-900"
                        />
                        <p className='RobotoCondensed'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='flex flex-col mx-10'>
                        <h5 className='RobotoCondensed text-center'>Kilian Voss</h5>
                        <h6 className='RobotoCondensed text-center'>Strategy Developement</h6>
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            className="w-1/3 md:w-1/3 lg:w-1/3 mx-auto mb-6 shadow-2xl shadow-violet-900"
                        />
                        <p className='RobotoCondensed'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='flex flex-col mx-10'>
                        <h5 className='RobotoCondensed text-center'>Lachlan Steele</h5>
                        <h6 className='RobotoCondensed text-center'>Developement Infrastructure</h6>
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            className="w-1/3 md:w-1/3 lg:w-1/3 mx-auto mb-6 shadow-2xl shadow-violet-900"
                        />
                        <p className='RobotoCondensed'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='flex flex-col mx-10'>
                        <h5 className='RobotoCondensed text-center'>Fortino Gomez</h5>
                        <h6 className='RobotoCondensed text-center'>Backtesting</h6>
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            className="w-1/3 md:w-1/3 lg:w-1/3 mx-auto mb-6 shadow-2xl shadow-violet-900"
                        />
                        <p className='RobotoCondensed'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='flex flex-col mx-10'>
                        <h5 className='RobotoCondensed text-center'>Pat Nguyen</h5>
                        <h6 className='RobotoCondensed text-center'>Backtesting</h6>
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            className="w-1/3 md:w-1/3 lg:w-1/3 mx-auto mb-6 shadow-2xl shadow-violet-900"
                        />
                        <p className='RobotoCondensed'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='flex flex-col mx-10'>
                        <h5 className='RobotoCondensed text-center'>Aleks Lyubinov</h5>
                        <h6 className='RobotoCondensed text-center'>Backtesting</h6>
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            className="w-1/3 md:w-1/3 lg:w-1/3 mx-auto mb-6 shadow-2xl shadow-violet-900"
                        />
                        <p className='RobotoCondensed'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <h3 className='RobotoCondensed text-center font-semibold tracking-widest'>Contact Us</h3>
                <div className='flex flex-row justify-center'>
                    <p className='RobotoCondensed mx-10 '>LinkedIn</p>
                    <p className='RobotoCondensed mx-10 '>Email</p>
                </div>
            </div>
        </div>
    );
}

export default About_Us_Page;
