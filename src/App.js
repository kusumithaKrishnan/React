import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Routes from './routes';
import { store } from './store/main'


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
          <Routes />
      </Provider>
    );
  }
}

export default App;
