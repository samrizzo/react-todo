import React from 'react';
import './App.css';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <div className="app">
      <h1 className="title">React Task List</h1>
      <Todo/>
    </div>
  );
}

export default App;
