import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function useInputHook() {
  const [input, setInput] = useState('')
  return [input, setInput];
}

function TodoPage() {
  const [input, setInput] = useInputHook()

  const history = useHistory()
  const dispatch = useDispatch()

  const store = useSelector(state => state.Topreducer)


  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const addTodoFunction = () => {
    if (input.length !== 0) {
      dispatch({
        type: 'ADDTODO', todo: {
          todo: input,
          done: false,
        }
      })
      setInput('')
      console.log(store.todos)
    } else {
      alert('フォームになんもないぞ')
    }
  }

  const deleteTodoFunction = (index) => {
    console.log(index)
    dispatch({ type: 'DELETE_TODO', index: index })
  }

  const doneTodoFunction = (index) => {
    dispatch({ type: 'DONE_TODO', index: index })
  }

  return (
    <div className='h-screen w-screen bg-gray-900 text-center'>

      <h1 className=" text-6xl text-white">TODO LIST</h1>
      <div className="flex justify-center">
        <input
          className="bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 appearance-none border border-transparent rounded py-2 px-4 text-gray-700 leading-tight"
          type='text'
          value={input}
          onChange={handleInputChange}
        />
        <button
          onClick={() => addTodoFunction()}
          className="ml-4 flex-shrink-0 bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded"
        >追加</button>
        <button
          onClick={() => history.goBack()}
          className=" ml-4 flex-shrink-0 bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded"
        >戻る</button>
      </div>
      <div className="flex justify-center mt-5">
        <div>
          {store.todos.map((todo, index) => {
            return (
              <div className="text-white w-64 py-4 px-4 hover:bg-gray-700 flex justify-between">
                {
                  todo.done ?
                    <div key={index} className="line-through">
                      {todo.todo}
                    </div>
                    :
                    <div key={index} >
                      {todo.todo}
                    </div>
                }
                <div className="flex">
                  <div onClick={() => doneTodoFunction(index)} className="border rounded px-2 py py-1 text-gray-400 hover:bg-gray-800 cursor-pointer">
                    {todo.done ? 'undone' : 'done'}
                  </div>
                  {
                    todo.done ?
                      <div
                        onClick={() => deleteTodoFunction(index)}
                        className="border rounded ml-3 px-2 py py-1 text-gray-400 hover:bg-gray-800 cursor-pointer"
                      >
                        delete
                      </div> :
                      <div></div>
                  }
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <h2 className="text-white">Last update : {(store.lastUpadate != null) ? new Date(store.lastUpadate).toString() : 'never'} </h2>
      </div>

    </div>
  )
}

export default TodoPage;