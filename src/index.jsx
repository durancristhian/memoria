import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import Header from './components/Header';
import Home from './containers/Home';
import Juego from './containers/Juego';
import rootReducer from './reducers';
import './styles.css';

const composeEnhancers =
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

ReactDOM.render(
  <Provider store={createStore(rootReducer, composeEnhancers)}>
    <BrowserRouter>
      <div className="flex flex-column justify-center min-vh-100">
        <div className="center mw8 w-100">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/juego" component={Juego} />
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
