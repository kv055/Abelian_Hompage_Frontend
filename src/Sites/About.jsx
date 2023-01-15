import React from 'react';

const About_Us_Page = (props) => {
  // Declare state variables and use the useState Hook
  const [state, setState] = React.useState({ /* initial state */ });

  return (
    <div>
        <div className="">
            <img src={Logo} alt="Logo" className="w-1/3 md:w-1/3 lg:w-1/3 mx-auto mb-6 shadow-2xl shadow-violet-900" />
            <h1 className='RobotoCondensed'>About Us</h1>
        </div>
        <div>
            <h3 className='RobotoCondensed'>The Team</h3>
            <div>
                <h5 className='RobotoCondensed'>William Godfrey</h5>
                <img />
                <p className='RobotoCondensed'>

                </p>
            </div>
            <div>
                <h5 className='RobotoCondensed'>Kilian Voss</h5>
                <img />
                <p className='RobotoCondensed'>

                </p>
            </div>
            <div>
                <h5 className='RobotoCondensed'>Lachlan Steele</h5>
                <img />
                <p className='RobotoCondensed'>

                </p>
            </div>
            <div>
                <h5 className='RobotoCondensed'>Fortino Gomez</h5>
                <img />
                <p className='RobotoCondensed'>
                    
                </p>
            </div>
        </div>
    </div>
  );
}

export default About_Us_Page;
