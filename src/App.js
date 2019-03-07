

import React, { Component } from 'react';
import './App.css';
import CCForm from './Form/CCFormContainer'
import Header from "./Header"
import Footer from "./Footer"

class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <br />
        <CCForm />
        <Footer />
      </div>
        
    );
  }
}

export default App;

