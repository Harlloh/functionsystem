import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';




const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomQuery = Math.random().toString(36).substring(7);
        const response = await axios.get(
          'https://newsapi.org/v2/everything',
          {
            params: {
              q: 'crypto',
              apiKey: 'ba86a3f42dc8447ea6906998d1494183',
              pageSize: 10,
              randomQuery: randomQuery,
            },
          }
        );
        const randomizedPosts = (response.data.articles);
        setBlogPosts(randomizedPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="container newsss">
      <h2>Cryptocurrency News</h2>
      <ul>
        {blogPosts.map((post) => (
          <NavLink className="overrr" to={post.url} key={post.url}>
            <li>
              {post.urlToImage && <img src={post.urlToImage} alt={post.title} />}
              <h3>
                {post.title}
              </h3>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
