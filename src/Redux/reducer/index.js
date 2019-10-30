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
    default:
      return state;
  }
}

export default Topreducer;