import React from 'react';
import * as ReactRedux from 'react-redux';

class Home extends React.Component {
  render(){
    return(
      <div>
        <h1>This is the home page</h1>
        <input type="text"/>
      </div>
    )
  }
}

const HomeContainer = ReactRedux.connect(
  null,
  null
)(Home)

export default HomeContainer;
