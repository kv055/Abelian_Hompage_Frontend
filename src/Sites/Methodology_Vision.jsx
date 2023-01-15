import React from 'react';

const Methodology_Vision_Page = (props) => {
  // Declare state variables and use the useState Hook
  const [state, setState] = React.useState({ /* initial state */ });

  return (
    <div>
        <div className="">
            <img src={Logo} alt="Logo" className="w-1/3 md:w-1/3 lg:w-1/3 mx-auto mb-6 shadow-2xl shadow-violet-900" />
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
