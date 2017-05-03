import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Counter.reducer';

const store = createStore(
  reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class Counter extends React.Component {

  subtract(){
    store.dispatch({
      type: 'subtract'
    });
  }



  add(){
    store.dispatch({
      type: 'add'
    });


  render() {


    return (
      <div>
        <button onClick={() => this.subtract()}>-</button>
        {this.props.on}
        <button onClick={() => this.add()}>+</button>
      </div>
    );
  }
}

function display() {
  ReactDOM.render(
    <Counter on={store.getState()}/>,
    document.getElementById('root')
  );
}

display();
store.subscribe(display);

//to initalize addtional states
// store.dispatch({
//
// })
