import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact"
import Footer from "./components/Footer";

import './App.css';

function App () {
  
  
  return (
  

    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="./contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
    

  );
   
   
}

export default App;
