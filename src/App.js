// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />   
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
