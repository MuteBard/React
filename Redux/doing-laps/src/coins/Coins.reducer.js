const INITIAL_STATE = {
  coins: [
    { name: 'quarter', value: 25 },
    { name: 'dime', value: 10 },
  ]
};

export default function reducer(state = INITIAL_STATE, action) {
  if (action.type === "penny"){
    let newCoins = state.coins.slice()
    newCoins.push({ name: 'penny', value: 1})
    return Object.assign({},state,{
      coins: newCoins
    })
  }
  else if(action.type === "nickle"){
    let newCoins = state.coins.slice()
    newCoins.push({name: 'nickle', value:5})
    return Object.assign({},state, {
      coins: newCoins
    })
  }

  else if(action.type === "dime"){
    let newCoins = state.coins.slice()
    newCoins.push({name: 'dime', value:10})
    return Object.assign({},state, {
      coins: newCoins
    })
  }

  else if (action.type === "quarter"){
    let newCoins = state.coins.slice()
    newCoins.push({name:"quarter", value:25})
    return Object.assign({},state, {
      coins:newCoins
    })
  }


  return state;
}


// export default function reducer(state = INITIAL_STATE, action) {
//   if (action.type === "penny"){
//     return Object.assign({},state,{
//       coins: [
//         { name: 'quarter', value: 25 },
//         { name: 'dime', value: 10 },
//         { name: 'penny', value: 1}
//       ]
//     })
//   }
//
//   return state;
// }
