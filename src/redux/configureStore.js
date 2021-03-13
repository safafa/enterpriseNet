import {createStore, applyMiddleware} from 'redux';
import {Reducer, initialState} from './reducer';
import {
    combineForms,
    createForms // optional
  } from 'react-redux-form';

const initialUserState = {
    firstName: '',
    lastName: '',
    email:'',
    username:'',
    password:''

  };
  export const store = createStore(combineForms({
    user: initialUserState,
  }));