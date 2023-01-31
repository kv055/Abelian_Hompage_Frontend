import React from 'react';
import { Selected_Site_Context } from '../context_test';
import Logo from '../assets/logo.png'

const Methodology_Vision_Page = () => {
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
            <h1 className='RobotoCondensed text-center text-indigo-700 font-extrabold tracking-widest'>Methology and Vision</h1>
        </div>
        {/* Content */}
        <div className='bg-violet-200 justify-start'>
            <h3 className='RobotoCondensed text-center font-semibold tracking-widest'>Our Process</h3>
            <div className='flex flex-row'>
                <div className='mx-10'>
                    <h5 className='RobotoCondensed'>Fundamental Analysis</h5>
                    <p className='RobotoCondensed'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='mx-10'>
                    <h5 className='RobotoCondensed'>Financial Modeleling</h5>
                    <p className='RobotoCondensed'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='mx-10'>
                    <h5 className='RobotoCondensed'>Strategy Developement with Backtesting</h5>
                    <p className='RobotoCondensed'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='mx-10'>
                    <h5 className='RobotoCondensed'>Paper Trading and Evaluation</h5>
                    <p className='RobotoCondensed'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <h3 className='RobotoCondensed text-center font-semibold tracking-widest'>Roadmap</h3>
                <div className='flex flex-row mx-10'>
                    <p className='RobotoCondensed'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
            </div>
        </div>
    </div>
  );
}

export default Methodology_Vision_Page;
