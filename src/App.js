import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="background">{props.children}</div>
    </div>
  );
}

export default App;
