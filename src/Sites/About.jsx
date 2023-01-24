import React from 'react';
import { Selected_Site_Context } from '../context_test';
import Logo from '../assets/logo.png'

const About_Us_Page = () => {
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
