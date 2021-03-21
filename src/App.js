import React from "react";
import Header from './components/Header'
import Home from './components/Home'
import Pizza from './components/Pizza'
import Success from './components/Success'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pizza" component={Pizza} />
          <Route path="/success" component={Success} />
        </Switch>
      </Router> 
      <Footer/>
    </div>
  );
};
export default App;
