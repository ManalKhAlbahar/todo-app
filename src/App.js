import React from 'react';
import SettingssContext from './context/setting'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'


import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (<>
    <SettingssContext>
    <Header />
      <ToDo />
      <Footer />
    </SettingssContext>
    
    </>

    );
  }
}