import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import All from './All';
import Fullstactdevelopment from './Fullstactdevelopment';
import Datascience from './Datascience';
import Career from './Career';
import Cybersecurity from './Cybersecurity';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
              
        <Navbar  className="navbar navbar-expand-sm bg-light justify-content-center" style={{marginLeft:'12%', width:'95%', height:'2%'}}>
      
          <Nav className="me-fix">
          <Link  className="nav-Link" to='/' href="#">ALL</Link>
            <Link  className="nav-Link" to='/fullstackdevelopment' href="#">FULLSTACKDEVELOPMENT</Link>
            <Link  className="nav-Link" to='/datascience' href="#">DATASCIENCE</Link>
<Link  className="nav-Link" to='/cybersecurity' href="#">CYBERSECURITY</Link>
            <Link  className="nav-Link" to='/career' href="#">CAREER</Link>            
          </Nav>         
        
    </Navbar>
    <Routes>
          <Route path='/' exact Component={All } />
          <Route path='/fullstackdevelopment' Component={Fullstactdevelopment} />
          <Route path='/datascience' Component={Datascience} />
 <Route path='/cybersecurity' Component={Cybersecurity} />
          <Route path='/career' Component={Career} />
          </Routes>    
             
        </Router>
       
     
    </>
  )
}

export default App
