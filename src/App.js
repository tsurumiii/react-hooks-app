import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import './styles/tailwind.css'

function useUserHook() {
  const [name, setName] = useState('tsurumi')

  useEffect(() => {
    console.log('useUserHook', name)
  }, [name])

  return [name, setName];
}

function useCountHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
    document.title = `You clicked ${count} times`;
  }, [count])

  return [count, setCount];
}

function App() {
  const [count, setCount] = useCountHook()
  const [user, setUser] = useUserHook()

  function Reset() {
    console.log('Reset()')
    setCount(0)
    setUser('tsurumi')
  }

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
          <div className="flex justify-around mb-2">
            <button onClick={() => setCount(count + 1)} className="block border px-2 px-2 rounded bg-blue-500 hover:bg-blue-400 text-white">
              Click plus
            </button>
            <button onClick={() => setCount(count - 1)} className="block px-2 border rounded bg-teal-600 hover:bg-teal-400 text-white">
              Click minus
            </button>
            <button onClick={() => setUser('Yuki Tsurumi')} className="block px-2 rounded bg-red-500 hover:bg-red-400 text-black hover:text-white border">
              cleck change name {user}
            </button>
            <button onClick={() => Reset()} className="block border px-2 px-2 rounded bg-green-500 hover:bg-green-400 text-white">
              Reset
            </button>
          </div>
        </div>
      </header>
    </div >
  );
}

export default App;
