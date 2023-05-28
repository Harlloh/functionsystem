import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  fetch('https://newsdata.io/api/1/news?apikey=pub_221745b3737ca9dd83968144054bcf7ed549b&q=crypto')
  .then(res => res.json())
  .then(data => {
    console.log(data.results)
    setBlogPosts(data.results)
  })
  .catch(error => {
    // enter your logic for when there is an error (ex. error toast)
   console.log(error)
  })
  return (
    <div className="container newsss">
      <h2>Cryptocurrency News</h2>
      <ul>
        {blogPosts.map((post) => (
          <NavLink href={post.link} key={post.link}>
            {post.image_url && <img src={post.image_url} alt={post.summary} />}
            <p >{post.title}</p>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
