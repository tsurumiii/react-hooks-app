const STATE = {
  todos: [
    {
      todo: 'aa',
      done: false
    }
  ],
  num: 0,
  lastUnpadate: null
}

export const Topreducer = (state = STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        num: state.num + action.step
      };
    case "DECREMENT":
      return {
        ...state,
        num: state.num - action.step
      };
    case "ADDTODO":
      return {
        ...state,
        lastUnpadate: Date.now(),
        todos: state.todos.concat(action.todo),
      }
    case "DELETE_TODO":
      {
        const todos = state.todos.slice();
        todos.splice(action.index, 1)
        return { ...state, lastUnpadate: Date.now(), todos }
      }
    case "DONE_TODO": {
      state.todos[action.index].done = !state.todos[action.index].done;
    }
    default:
      return state;
  }
}

export default Topreducer;