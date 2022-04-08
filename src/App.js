import './App.css';
import React from 'react';
import {BlogPostList} from './components/blogpost-list/blogpost-list.jsx'
import database from './firebase.js';

function App() {
  var blogposts = [];
  var blogPost = {
    title: 'Test title',
    body: 'test body'
  };
  var blogPostTwo = {
    title: 'Test title 2',
    body: 'test body 2'
  };
  var blogPostThree = {
    title: 'Test title 3',
    body: 'test body 3'
  };

  blogposts.push(blogPost);
  blogposts.push(blogPostTwo);
  blogposts.push(blogPostThree);

  const PostToFirestore = (post) => {
    database.collection("Posts").doc().set({
      title: post.title,
      body: post.body
     })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chase's Developer Logs</h1>
        <p>Environment: {process.env.REACT_APP_ENVIRONMENT}</p>
      </header>
      <BlogPostList posts={blogposts}/>
      <button onClick={PostToFirestore(blogPost)}>Click me</button>
    </div>
  );
}

export default App;
