const INITIAL_STATE = {
  content: ''
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'one-page') {
    console.log(action.value)
    return Object.assign({}, state, {
      content: action.value
    });
  }
  return state;
}
