const INITIAL_STATE = {
  allPages: []
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === "allPages"){
    let newAllPages = state.allPages.slice()
    for(var i = 0 ; i < action.value.length; i++){
      console.log(action.value[i].title)
      newAllPages.push(action.value[i].title)
    }

    console.log(newAllPages)
    return Object.assign({}, state, {
      allPages: newAllPages
    })
  }
  return state;
}
