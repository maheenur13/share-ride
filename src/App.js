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
import { createContext, useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import fakeData from '../src/Components/FakeData/FakeData.json'
function App() {
  const context=createContext();
  const [allData,setAllData]= useState([])
  useEffect(()=>{
    setAllData(fakeData);
    // console.log(allData);
  },[])
  return (
    <div className="main-back">
    <context.Provider value={fakeData}>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',height:'100%'}}>
           {
             allData.map(data=> <Home  data={data} key={data.id} ></Home>)
           }
           </div>
        </Route>
        <Route path="/home">
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',height:'100%'}}>
          {
             allData.map(data=> <Home  data={data} key={data.id} ></Home>)
           }
           </div>
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
