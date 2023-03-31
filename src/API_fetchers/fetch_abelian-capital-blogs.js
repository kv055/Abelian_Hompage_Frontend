import { useState, useEffect } from 'react';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const API_URL = process.env.ABELIAN_BLOGS_ENDPOINT;
  const TOKEN = process.env.TEST_TOKEN_BLOG;

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(`${API_URL}/abelian-capital-blogs`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        });
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
