// Do not generate a random number in this function!
// That would violate the purity of this function.
// Generate a random number and then dispatch it as
// an action.

//store needs to know what the state is but does not
//matter what the previous state was



function reducer(state, action) {
  if(action.type === 'heads'){
    state = 1
    return state
  }else if(action.type === 'tails'){
    state = 0
    return state
  }else{
    state = -1
    return state
  }
}

export default reducer;
