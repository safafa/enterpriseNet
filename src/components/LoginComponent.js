import React, {Component} from 'react';
import {Row, Label, CardTitle, Button, FormGroup, CardBody,Card} from 'reactstrap';
import {Control, Form, Errors} from 'react-redux-form';

const required = (val) => val && val.length;

class Login extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(user) {
        console.log(user);
        alert('Login information: ' + user);
    }

    render(){
        return(
            <div className="signin">
            <Card body outline color="success" >
              <CardTitle tag="h5">Signin</CardTitle>
              <CardBody>

        <Form 
          model="user"
          onSubmit={(user) => this.handleSubmit(user)}
        >
          <FormGroup>
          <Control.text model="user.email" id="user.email" placeholder="Email"/>
          </FormGroup>
          <FormGroup>
          <Control.password model="user.password" id="user.password" placeholder="Password" />
          </FormGroup>
  
          <Button color="success" type="submit">
            Login
          </Button>
        </Form></CardBody></Card></div>
            
        )
    }

}
export default Login
