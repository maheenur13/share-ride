
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
import fakeData from '../src/Components/FakeData/FakeData.json'
import PrivateRout from './Components/PrivateRoute/PrivateRout';
export const userContext=createContext();
function App() {
  
   const [loggedInUser,setLoggedInUser]=useState([]);
   console.log(loggedInUser);
  const [allData,setAllData]= useState([])
  useEffect(()=>{
    setAllData(fakeData);
    // console.log(allData);
  },[])
  return (
    <div className="main-back">
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
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
