import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;