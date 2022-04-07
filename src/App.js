import './App.css';
import React from 'react';
import {BlogPost} from './components/blogpost/blogpost.jsx'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chase's Developer Logs</h1>
      </header>
      <BlogPost />
    </div>
  );
}

export default App;
