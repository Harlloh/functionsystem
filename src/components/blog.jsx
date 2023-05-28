import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  // fetch('https://newsdata.io/api/1/news?apikey=pub_221745b3737ca9dd83968144054bcf7ed549b&q=crypto')
  fetch('https://gnews.io/api/v4/search?q=crypto&lang=en&country=us&max=10&apikey=614497ccec25dcede986d69abd2fcdbf')
  .then(res => res.json())
  .then(data => {
    // console.log(data.articles)
    setBlogPosts(data.articles)
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
          <NavLink href={post.url} key={post.url}>
            {post.image && <img src={post.image} alt={post.summary} />}
            <p >{post.title}</p>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
