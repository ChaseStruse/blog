import './App.css';
import React from 'react';
import BlogPostRepository from './repositories/BlogPostRepository.js'
import {BlogPost} from './repositories/models/BlogPost';

const repo = new BlogPostRepository();
const blogPost = BlogPost('Log1', 'Title for Log 1', 'Body for Log 1');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chase's Developer Logs</h1>
        <p>Environment: {process.env.REACT_APP_ENVIRONMENT}</p>
      </header>
      <button type="button" onClick={() => repo.PostToFirestore(blogPost)}>Click me</button>
      <button type="button" onClick={() => repo.DeleteFromFirestore(blogPost.id)}>Click me to Delete</button>
      <button type="button" onClick={() => repo.GetByTitle(blogPost.id)}>Click me to Get Data</button>
    </div>
  );
}

export default App;
