import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext } from 'react';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';

function App() {
  const context=createContext();
  return (
    <div className="main-back">
    <context.Provider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route path="/home">
           <Home></Home>
        </Route>
        <Route path="/destination">
            <Destination></Destination>
        </Route>
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
      
       </context.Provider>
      </div>
  );
}

export default App;
