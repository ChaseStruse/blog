import React from 'react';
import './blogpost.css';

export const BlogPost = (props) => {
  return (
    <div className="post-container">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
    </div>
  );
}
