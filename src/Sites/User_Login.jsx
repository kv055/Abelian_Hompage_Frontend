import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import LoginForm from '../components/login_form';

const User_Login_Page = () => {
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  
  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('https://jb3gfmz2rd.us-east-1.awsapprunner.com/api/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      });

      if (!response.ok) {
        // Login failed, set error message
        setMessage('Invalid email or password');
        return;
      }

      const data = await response.json();

      // Login successful, store token in local storage
      localStorage.setItem('jwt', data.jwt);
      // Set success message
      setMessage('Login successful!');

      setLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='h-screen flex flex-col items-center justify-start px-10'>
      <Header />
      {/* Content */}
      <div className='bg-violet-200 flex-wrap w-full items-center'>
        <h3 className='RobotoCondensed text-center font-semibold tracking-widest text-2xl m-5'>
          Login for a Demo version of the AC Terminal
        </h3>
        {loggedIn ? null : <LoginForm handleLogin={handleLogin} />}

        {message && <p className='text-center'>{message}</p>}

        {/* Embed Google here */}
        {loggedIn && (
          <iframe
            title='Abelian Terminal Demo'
            src='https://abelianterminaldemo.s3.amazonaws.com/index.html'
            width='100%'
            height='1000px'
          ></iframe>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default User_Login_Page;

