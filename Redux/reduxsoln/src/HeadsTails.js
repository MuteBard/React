import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './HeadsTails.reducer';

// Add code to create a store
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);





class HeadsTails extends React.Component {

  flip(){
    let value = Math.random()
    let type = value > 0.5 ? "heads" : "tails"
    store.dispatch({
      'type':type
    })
  }

  render() {
    let coinDisplay;
    let imageUrl = this.props.on > 0.5 ?
      'images/quarter-front.png' :
      'images/quarter-back.png';
    coinDisplay = <img src={imageUrl}/>;

    return (
      <div>
        {coinDisplay}
        <button onClick={() => this.flip()}>
          Flip!
        </button>
      </div>
    );
  }
}

// Wrap this in a display function, and subscribe to store's state
// changes and re-display


function display(){
  ReactDOM.render(
    <HeadsTails on={store.getState()}/>,
     document.getElementById('root'));
}


//subscribe to changes and redisplay
store.subscribe(display);
//inital display
display();
