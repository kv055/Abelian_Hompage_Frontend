import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import BlogList from '../API_fetchers/fetch_abelian-capital-blogs';

const Blog_Page = () => {

  return (
    <div className='h-screen flex flex-col items-center justify-start px-10'>
        <Header></Header>
          <div className='bg-violet-200 flex items-center justify-center flex-wrap'>
            <div className='flex-col w-2/3'>
              {/* <h3 className='RobotoCondensed text-center font-semibold tracking-widest text-2xl m-5'>Updates from inside the Company</h3> */}
              <BlogList />
            </div>
          </div>
      <Footer></Footer>
    </div>
  );
}

export default Blog_Page;


// 