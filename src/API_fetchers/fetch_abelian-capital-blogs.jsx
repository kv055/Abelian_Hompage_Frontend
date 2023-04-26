import { useState, useEffect } from 'react';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  
  const TOKEN = '39c12c72dfc2fecf7db21c166c726daff4d05839261897234fdf7df5182f9cfbbb33b1072f5ad955f38ab91123b4221d9671a44777121bd2ccc69027ca108edabf8156953a1596a99326a4924dacd4440e9423f3123aff8cc718c97d09be7ec176282b56bcb69b4872ab0b8b74f62dee3844384531eb99d7385a7086ac93c1ed';

  
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(`https://jb3gfmz2rd.us-east-1.awsapprunner.com/api/abelian-capital-blogs`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
        const data = await response.json();
        setBlogs(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBlogs();
  }, []);

  console.log(blogs);

  const blogItems = blogs.map((blog) => (
    <div key={blog.id} className='flex flex-col items-center w-1/3 m-10'>
      <h5 className='RobotoCondensed text-center text-indigo-700 font-extrabold tracking-widest text-2xl'>{blog.attributes.Title}</h5>
      <h6 className='RobotoCondensed mb-10'>{blog.attributes.Date_Published}</h6>
      <p className='RobotoCondensed text-center'>
        {blog.attributes.Content}  
      </p>
    </div>
  ));

  return (
    <div className='w-full flex flex-col xl:flex-row xl:flex-wrap items-center'>
      {blogItems}
    </div>
  );
}

export default BlogList;

