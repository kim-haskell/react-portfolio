import React, { Component} from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import './App.css';

class App extends Component {
  
  render () {
  return (
  
    <div className="App">
      <Navbar></Navbar>

    
      <Home />
  
    </div>
   
   
   );
  }
}

export default App;
