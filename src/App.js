import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxDemo from './ReduxDemo'
import { Provider } from 'react-redux'
import store from './store'
import RouterDemo from './RouterDemo'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <ReduxDemo></ReduxDemo> */}
        <RouterDemo></RouterDemo>
      </Provider>
    </div>
  );
}

export default App;
