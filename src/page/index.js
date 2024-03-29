import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import logo from '../logo.svg';
import { useHistory } from 'react-router-dom'

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

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
}

function useTodoTask() {
  const [task, setTask] = useState('')
  return [task, setTask];
}


function TopPage() {
  const [count, setCount] = useCountHook()
  const [user, setUser] = useUserHook()
  const width = useWindowWidth();
  const [task, setTask] = useTodoTask();

  const store = useSelector(state => state.Topreducer)
  const dispatch = useDispatch();

  const history = useHistory()

  function Reset() {
    console.log('Reset()')
    setCount(0)
    setUser('tsurumi')
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setTask(event.target.value)
  }


  const addStoreTodo = () => {
    console.log(store.todos)
    dispatch({
      type: 'ADDTODO', todo: {
        todo: task,
        done: false,
      }
    })
    setTask('')
    console.log(store.todos)
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
        <div className='bg-gray-900 text-gray-600 w-full pb-10'>
          <p>You clicked {count} {width} times</p>
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
          <div>
            <div className="mt-20 flex w-1/2">
              <div className="w-full max-w-sm mx-auto">
                <input
                  type="text"
                  className="flex-1 bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
                  placeholder="todoを入力してね"
                  value={task}
                  name="task"
                  onChange={handleChange}
                />
              </div>
              <button
                onClick={addStoreTodo}
                className="ml-4 flex-shrink-0 bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded"
              >追加</button>
            </div>
          </div>
          <div>
            {store.todos.map((tod, index) => {
              return <div key={index}>{tod.todo} </div>
            })}
          </div>
          <div>
            <h1 className="text-white">{store.num}</h1>
          </div>
          <button
            onClick={() => dispatch({ type: 'INCREMENT', step: 1 })}
            className="ml-4 flex-shrink-0 bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded"
          >redux</button>
        </div>
        <button
          onClick={() => history.push('/todo')}
          className="ml-4 mb-48 flex-shrink-0 bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded"
        >todoページへ</button>
      </header>
    </div >
  );
}

export default TopPage;