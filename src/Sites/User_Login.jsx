import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import LoginForm from '../components/login_form';

const User_Login_Page = () => {
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('http://localhost:1337/api/auth/local', {
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
      // // Redirect user to Google
      // window.open('https://www.google.com', '_blank');

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
            title='Google'
            src='https://abelianterminaldemo.s3.amazonaws.com/build/index.html'
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


// import React, { useState } from 'react';
// import Header from '../components/header';
// import Footer from '../components/footer';

// const User_Login_Page = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
  
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:1337/api/auth/local', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           identifier: email,
//           password,
//         }),
//       });
  
//       if (!response.ok) {
//         // Login failed, set error message
//         setMessage('Invalid email or password');
//         return;
//       }
  
//       const data = await response.json();
  
//       // Login successful, store token in local storage
//       localStorage.setItem('jwt', data.jwt);
//       // Set success message
//       setMessage('Login successful!');
//       // Redirect user to Google
//       // window.open('https://www.google.com', '_blank');  

//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   return (
//     <div className='h-screen flex flex-col items-center justify-start px-10'>
//       <Header />
//       {/* Content */}
//       <div className='bg-violet-200 flex-wrap w-full items-center'>
//         <h3 className='RobotoCondensed text-center font-semibold tracking-widest text-2xl m-5'>
//           Login for a Demo version of the AC Terminal
//         </h3>
//         <div className='flex flex-col justify-center mx-auto m-10 items-center'>
//           <h5 className='RobotoCondensed mx-10'>User Name</h5>
//           <form>
//             <input
//               type='text'
//               placeholder='Enter your username here'
//               className='rounded-lg p-2'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </form>
//           <br></br>
//           <h5 className='RobotoCondensed mx-10'>User Password</h5>
//           <form>
//             <input
//               type='password'
//               placeholder='Enter your password here'
//               className='rounded-lg p-2'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </form>
//           <button
//             className='m-10 bg-indigo-600 px-10 py-1 rounded-lg'
//             onClick={handleLogin}
//           >
//             LogIn
//           </button>

//           {message && <p className='text-center'>{message}</p>}

//           {/* Embedt Google here */}
//           {message === 'Login successful!' && (
//             <iframe
//               src='https://abelianterminaldemo.s3.amazonaws.com/build/index.html'
//               width='100%'
//               height='600'
//               title='Google'
//             ></iframe>
//           )}

//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default User_Login_Page;
