import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import CounterContainer from './counter/Counter';
import counterReducer from './counter/Counter.reducer';
import GalleryContainer from './gallery/Gallery';
import galleryReducer from './gallery/Gallery.reducer';
import DragonGameContainer from './dragon/Dragon';
import dragonGameReducer from './dragon/Dragon.reducer';
import WeatherContainer from './weather/Weather';
import weatherReducer from './weather/Weather.reducer';
import HomeContainer from './home/Home';
import {Router, Route, hashHistory, Link, IndexRoute, IndexLink} from 'react-router'

const reducer = Redux.combineReducers({
  theCount: counterReducer,
  galleryInfo: galleryReducer,
  dragonGame: dragonGameReducer,
  weather: weatherReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

const AppLayout = ({ children }) =>
  <div>
    <ul className="nav">
      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
      <li><Link to="/Counter" activeClassName="active">Counter</Link></li>
      <li><Link to="/Gallery" activeClassName="active">Gallery</Link></li>
      <li><Link to="/DragonGame" activeClassName="active">DragonGame</Link></li>
      <li><Link to="/Weather" activeClassName="active">Weather</Link></li>
    </ul>
    <div>
      {children}
    </div>
  </div>;


ReactDOM.render(
<ReactRedux.Provider store={store}>
  <Router history={hashHistory}>
      <Route path="/" component={AppLayout}>
      <IndexRoute component={HomeContainer}/>
      <Route path="/Counter" component={CounterContainer}/>
      <Route path="/DragonGame" component={DragonGameContainer}/>
      <Route path="/Gallery" component={GalleryContainer}/>
      <Route path="/Weather" component={WeatherContainer}/>
      </Route>
  </Router>
</ReactRedux.Provider>,
  document.getElementById('root')
);
