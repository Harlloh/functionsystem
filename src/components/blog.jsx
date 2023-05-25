import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';




const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything',
          {
            params: {
              q: 'crypto',
              apiKey: 'ba86a3f42dc8447ea6906998d1494183',
              pageSize: 10,
            },
          }
        );
        setBlogPosts(response.data.articles);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchData();

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
