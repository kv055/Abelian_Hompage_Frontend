import React from 'react';
import { Selected_Site_Context } from '../context_test';
import Logo from '../assets/logo.png'
import Kilian from '../assets/Passfoto.jpg'

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
            <div className='flex flex-col justify-center'>
                <h3 className='RobotoCondensed'>The Team</h3>
                <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <h5 className='RobotoCondensed'>William Godfrey</h5>
                        <h6 className='RobotoCondensed'>Role</h6>
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            className="w-1/3 md:w-1/3 lg:w-1/3 mx-auto mb-6 shadow-2xl shadow-violet-900"
                        />
                        <p className='RobotoCondensed'>
    
                        </p>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h5 className='RobotoCondensed justify-center'>Kilian Voss</h5>
                        <h6 className='RobotoCondensed'>Role</h6>
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            className="w-1/3 md:w-1/3 lg:w-1/3 mx-auto mb-6 shadow-2xl shadow-violet-900"
                        />
                        <p className='RobotoCondensed'>
    
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <h5 className='RobotoCondensed'>Lachlan Steele</h5>
                        <h6 className='RobotoCondensed'>Role</h6>
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            className="w-1/3 md:w-1/3 lg:w-1/3 mx-auto mb-6 shadow-2xl shadow-violet-900"
                        />
                        <p className='RobotoCondensed'>
    
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <h5 className='RobotoCondensed'>Fortino Gomez</h5>
                        <h6 className='RobotoCondensed'>Role</h6>
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            className="w-1/3 md:w-1/3 lg:w-1/3 mx-auto mb-6 shadow-2xl shadow-violet-900"
                        />
                    <p className='RobotoCondensed'>

                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About_Us_Page;
