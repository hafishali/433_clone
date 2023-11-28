import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'






function Header() {
  return (
   <div>
 <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img style={{height:'30px',width:'30px'}} src="https://www.433football.com/cdn/shop/files/433_Studios_Logo.png?v=1624351899" alt="" /></Navbar.Brand>
          
              <Nav className="me-auto" style={{marginLeft:'20rem'}} >
                <Nav.Link  className='nav fw-bold text-light'  href="#home">PARTNERSHIPS</Nav.Link>
                <Nav.Link  className='nav ms-5 fw-bold text-light' href="#features">ABOUT US</Nav.Link>
                <Nav.Link  className='nav ms-5 fw-bold text-light' href="#pricing">CAREER</Nav.Link>
                <Nav.Link  className='nav ms-5 fw-bold text-light' href="#pricing">CONTACT</Nav.Link>
    
              </Nav>
              <Nav>
              <Nav.Link  className='ms-5' href="#features"><button type="button" style={{borderRadius:'20px'}} class="btn border-warning">Submit</button></Nav.Link>
              </Nav>
          
        </Container>
      </Navbar>
   </div>
  )
}

export default Header