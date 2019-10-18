import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import './styles/tailwind.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Yuki')

  useEffect(() => {
    console.log(count);
    document.title = `You clicked ${count} times`;
  }, [count])

  useEffect(() => {
    console.log(name)
  }, [name])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="bg-gray-100 text-gray-600 w-full">
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)} className="border">
            Click me
          </button>
          <button onClick={() => setCount(count - 1)} className="border">
            Click minus
          </button>
          <button onClick={() => setName('Yuki Tsurumi')} className="border">
            cleck change name {name}
          </button>
        </div>
      </header>
    </div >
  );
}

export default App;
