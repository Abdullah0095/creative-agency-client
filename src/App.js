import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddServiceAdmin from "./components/AdminZone/AddServiceAdmin/AddServiceAdmin";
import MakeAdmin from "./components/AdminZone/MakeAdmin/MakeAdmin";
import ServiceListAdmin from "./components/AdminZone/ServiceListAdmin/ServiceListAdmin";

import Order from "./components/CustomerZone/Order/Order";
import Review from "./components/CustomerZone/Review/Review";
import Servicelist from "./components/CustomerZone/Servicelist/Servicelist";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

import NoMatch from "./components/NoMatch/NoMatch";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value= {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
              <Home/>
          </Route>
          <Route path="/customer/order/:id">
              <Order/>
          </Route>
          <Route path="/customer/serviceList">
              <Servicelist/>
          </Route>
          <Route path="/customer/review">
              <Review/>
          </Route>
          <Route path="/admin/serviceList">
              <ServiceListAdmin/>
          </Route>
          <Route path="/admin/addService">
              <AddServiceAdmin/>
          </Route>
          <Route path="/admin/makeAdmin">
              <MakeAdmin/>
          </Route>
          <Route path="/login">
              <Login/>
          </Route>

          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="*">
              <NoMatch/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    
  );
}

export default App;
