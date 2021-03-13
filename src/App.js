import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './redux/configureStore';
import Main from "./components/MainComponent";


class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <BrowserRouter> 
      <div >
      <Provider store={store}>
        <Main/>
        </Provider>
      </div>
      </BrowserRouter>
     
  );
  }
  
}

export default App;
