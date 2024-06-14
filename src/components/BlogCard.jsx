//templet for blog entries
import './Blog.css';
import React from 'react';
import { Link } from 'react-router-dom'; 

//use props to dynamically render blog posts
//ran into problems trying to render data directly from a json file 
export function BlogCard ({ title, summary, blogLink }) {
  return (
    <div className="Blog-Card">
      <Link to={blogLink}>
      <button className='Blog-Button'>
      <h3>{title}</h3>
      <p>{summary}</p>      
      </button>
      </Link>
    </div>
  );
};
