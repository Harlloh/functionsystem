import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('https://gnews.io/api/v4/search?q=crypto&lang=en&country=us&max=10&apikey=614497ccec25dcede986d69abd2fcdbf');
        console.log(response.data.articles)
        setBlogPosts(response.data.articles);
      } catch (error) {
        console.log(error);
        // Implement your error handling logic here
      }
    };

    fetchBlogPosts();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="container newsss">
      <h2>Cryptocurrency News</h2>
      <ul>
        {blogPosts.map((post) => (
          <NavLink to={post.url} key={post.url}>
            {post.image && <img src={post.image} alt={post.summary} />}
            <h3 className='adbs'>{post.title}</h3>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
