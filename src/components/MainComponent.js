import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Login from './LoginComponent'

const mapStateToProps = state =>{
    
  }

class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
        <Header/>
        <Switch>
            
              <Route path="/login" component={Login}/>
              <Redirect to="/home" />
              
             
          </Switch>
       <Footer/>
        
      </div>
            )
            
        
    }

}

export default withRouter(connect(mapStateToProps)(Main));
