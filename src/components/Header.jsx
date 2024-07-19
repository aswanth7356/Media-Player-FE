import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
      <>
      <Navbar className="bg-success">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-cloud-arrow-up fa-bounce "  style={{color: "#a30080",}} /> 
        
          <Link to={'/'} style={{textDecoration:'none'}}>
            <span className='h5 ms-3'>MEDIA PLAYER</span>
          </Link>
          
          </Navbar.Brand>
        </Container>
      </Navbar>
      </>
    </div>
  )
}

export default Header
