
import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';

import PrivateRout from './Components/PrivateRoute/PrivateRout';

export const userContext=createContext();

function App() {
  
   const [loggedInUser,setLoggedInUser]=useState([]);
   console.log(loggedInUser);
  
  return (
    <div className="main-back">
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRout path="/destination">
            <Destination></Destination>
        </PrivateRout>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        </Switch>
       </Router>
      
       </userContext.Provider>
      </div>
  );
}

export default App;
