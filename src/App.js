import React from "react";
import Header from './components/Header'
import Home from './components/Home'
import Pizza from './components/Pizza'
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
        </Switch>
      </Router> 
      <Footer/>
    </div>
  );
};
export default App;
