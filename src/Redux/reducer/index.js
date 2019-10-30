const STATE = {
  todos: [],
  num: 0,
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
        todos: state.todos = [...state.todos, action.todo]
      }
    default:
      return state;
  }
}

export default Topreducer;