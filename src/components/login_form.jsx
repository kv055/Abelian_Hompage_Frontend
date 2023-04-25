import React, { useState } from 'react';

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='flex flex-col justify-center mx-auto m-10 items-center'>
      <h5 className='RobotoCondensed mx-10'>User Name</h5>
      <form>
        <input
          type='text'
          placeholder='Enter your username here'
          className='rounded-lg p-2'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <br></br>
      <h5 className='RobotoCondensed mx-10'>User Password</h5>
      <form>
        <input
          type='password'
          placeholder='Enter your password here'
          className='rounded-lg p-2'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button
        className='m-10 bg-indigo-600 px-10 py-1 rounded-lg'
        onClick={() => handleLogin(email, password)}
      >
        LogIn
      </button>
    </div>
  );
};

export default LoginForm;
