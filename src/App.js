import React from 'react';
import SettingssContext from './context/setting'
import Header from './components/Header/header'
import LoginContext from '../src/context/login'
import  Login from '../src/components/Login/login';
import './App.scss'


import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (<>
     <LoginContext>
     <Login/>
    <SettingssContext>
    <Header />
      <ToDo />
    </SettingssContext>
    </LoginContext>
    </>

    );
  }
}