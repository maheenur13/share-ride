import React,{useContext} from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './Header.css';
  import {userContext} from '../../App';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUserCircle } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  // const[loggedInUser,setLoggedInUser]=use({});
  const [loggedInUser,setLoggedInUser]=useContext(userContext);
    return (
        <>
  <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="Nav-items-design">
        <Link className="nav-item" to="/home" >Home</Link>
         <Link className="nav-item" to="/destination" >Destination</Link>
         <Link className="nav-item" to="/blog" >Blog</Link>
        <Link className="nav-item" to="/contact" >Contact</Link>
        {!loggedInUser.email? <Link style={{backgroundColor:'orange',color:'black',borderRadius:'5px',fontWeight:'bold'}} className="nav-item" to="/login">Login</Link>:
        <Link style={{backgroundColor:'orange',color:'black',borderRadius:'2px',fontWeight:'bold'}} className="nav-item" to="/login" onClick={()=>setLoggedInUser({})}>Sign Out</Link>
        }
        {loggedInUser.email && <h6 style={{backgroundColor:'green',color:'white',borderRadius:'2px',fontWeight:'bold'}} className="nav-item"><FontAwesomeIcon style={{marginRight:'6px'}} icon={faUserCircle}/>{loggedInUser.name}</h6>}
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
  
</>
    );
};

export default Header;