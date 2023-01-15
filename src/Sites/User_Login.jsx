import React from 'react';

const User_Login_Page = (props) => {
  // Declare state variables and use the useState Hook
  const [state, setState] = React.useState({ /* initial state */ });

  return (
    <div>
        <div className="">
            <img src={Logo} alt="Logo" className="w-1/3 md:w-1/3 lg:w-1/3 mx-auto mb-6 shadow-2xl shadow-violet-900" />
            <h1 className='RobotoCondensed'>User LogIn</h1>
        </div>
        <div>
            <h5 className='RobotoCondensed'>User Name</h5>
            <form></form>
            <h5 className='RobotoCondensed'>User Password</h5>
            <form></form>
            <button>LogIn</button>
        </div>    
    </div>
  );
}

export default User_Login_Page;
