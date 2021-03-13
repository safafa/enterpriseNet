import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import Main from "./components/MainComponent"
const store = ConfigureStore();

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Provider store={store}>
      <BrowserRouter> 
      <div >
        <Main/>
      </div>
      </BrowserRouter>
     </Provider>
  );
  }
  
}

export default App;
