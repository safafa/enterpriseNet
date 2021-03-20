import React, { Component } from 'react';
import { Control, Form, actions } from 'react-redux-form';
import {Card, CardBody,CardTitle,FormGroup,Button,Row,Col} from 'reactstrap';

class Signup extends Component{

    handleSubmit(user) {
       console.log(user);
      }
      render() {
        return (
            <div className="signup">
              <Card body outline color="success" >
                <CardTitle tag="h5">Signup Form</CardTitle>
                <CardBody>

          <Form 
            model="user"
            onSubmit={(user) => this.handleSubmit(user)}
          > <FormGroup>
            <Control.text  model="user.firstName" id="user.firstName" placeholder="First Name"/>
            </FormGroup>
            <FormGroup>
            <Control.text model="user.lastName" id="user.lastName" placeholder="Last Name" />
            </FormGroup>
            <FormGroup>
            <Control.text model="user.email" id="user.email" placeholder="Email"/>
            </FormGroup>
            <FormGroup>
            <Control.text model="user.username" id="user.username"  placeholder="Username"/>
            </FormGroup>
            <FormGroup>
            <Control.password model="user.password" id="user.password" placeholder="Password" />
            </FormGroup>
    
            <Button color="success" type="submit">
              Regisiter!
            </Button>
          </Form></CardBody></Card></div>
        );
      }


}

export default Signup;