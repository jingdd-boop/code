import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'

const App: React.FC = () => {
  const [show, setShow] = useState(true)
  const position = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <button onClick={() => setShow(!show)}>Too</button>
        </p>
        <Hello message="hello"></Hello>
        <p>X:{position.x},Y:{ position.y }</p>
        <LikeButton></LikeButton>
        {/* {show && <MouseTracker></MouseTracker>} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
