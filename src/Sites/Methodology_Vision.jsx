import React from 'react';
import { Selected_Site_Context } from '../context_test';
import Logo from '../assets/logo.png'

const Methodology_Vision_Page = () => {
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
            <h1 className='RobotoCondensed'>Methology and Vision</h1>
        </div>
        <div>
            <h3 className='RobotoCondensed'>The Process</h3>
            <div>
                <h5 className='RobotoCondensed'>Fundamental Analysis</h5>
                <p className='RobotoCondensed'>

                </p>
            </div>
            <div>
                <h5 className='RobotoCondensed'>Financial Modeleling</h5>
                <p className='RobotoCondensed'>

                </p>
            </div>
            <div>
                <h5 className='RobotoCondensed'>Strategy Developement with Backtesting</h5>
                <p className='RobotoCondensed'>

                </p>
            </div>
            <div>
                <h5 className='RobotoCondensed'>Paper Trading and Evaluation</h5>
                <p className='RobotoCondensed'>
                    
                </p>
            </div>
        </div>
    </div>
  );
}

export default Methodology_Vision_Page;
