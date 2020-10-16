import React, {Component} from 'react';
import './style/Navbar.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

import Home from '../pages/home';
import Offers from '../pages/offers';
import PostOffers from '../pages/postOffers';
import Register from '../pages/register';
import Login from '../pages/login';

class Navbar extends Component {
  render() {
    return (
      <Router>
      <div className="navbar">
          <ul className="navul">
            <li className="navli"><Link to={"/"}>Home</Link></li>
            <li className="navli"><Link to={"/Offers"}>Offers</Link></li>
            <li className="navli"><Link to="/PostOffers">Post Offers</Link></li>
            <li className="navlog"><Link to="/Register">Register</Link></li>
            <li className="navlog"><Link to="/Login">Login</Link></li>
          </ul>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Offers" component={Offers}/>
          <Route path="/PostOffers" component={PostOffers}/>
          <Route path="/Register" component={Register}/>
          <Route path="/Login" component={Login}/>
        </Switch>
      </div>
      </Router>
  );
  }
}

export default Navbar;