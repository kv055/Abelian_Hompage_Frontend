import React from 'react';
import { Selected_Site_Context } from '../context_test';
import Footer from '../components/footer'
import Header from '../components/header';

const Methodology_Vision_Page = () => {
  const {Selected_Site, set_Selected_Site} = React.useContext(Selected_Site_Context)

  return (
    <div className='h-screen flex flex-col items-center justify-start px-10'>
        <Header></Header>
        {/* Content */}
        <div className='bg-violet-200'>
            <h3 className='RobotoCondensed text-center font-semibold tracking-widest text-2xl m-5'>Our Process</h3>
            <div className='flex items-center justify-center flex-wrap'>
                <div className='flex-col w-2/3 m-10'>
                    <h5 className='RobotoCondensed text-start mb-10 text-indigo-700 font-extrabold tracking-widest'>Fundamental Analysis</h5>
                    <p className='RobotoCondensed'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='flex-col w-2/3 m-10'>
                    <h5 className='RobotoCondensed text-start mb-10 text-indigo-700 font-extrabold tracking-widest'>Financial Modeleling</h5>
                    <p className='RobotoCondensed'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='flex-col w-2/3 m-10'>
                    <h5 className='RobotoCondensed text-start mb-10 text-indigo-700 font-extrabold tracking-widest'>Strategy Developement with Backtesting</h5>
                    <p className='RobotoCondensed'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='flex-col w-2/3 m-10'>
                    <h5 className='RobotoCondensed text-start mb-10 text-indigo-700 font-extrabold tracking-widest'>Paper Trading and Evaluation</h5>
                    <p className='RobotoCondensed'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <h3 className='RobotoCondensed text-center font-semibold tracking-widest text-2xl m-5'>Roadmap</h3>
                <div className='flex items-center justify-center flex-wrap'>        
                    <div className='flex-col w-2/3 m-10'>
                        <p className='RobotoCondensed'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Methodology_Vision_Page;
