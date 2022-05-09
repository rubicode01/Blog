import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Link } from 'react-bootstrap'


const NavBar = () => {
  return (
    <div className="navBG">
<Navbar>
    <Container>
      <Navbar.Brand>
        <img
          alt="Blog4Group"
          src="/img/B4G_Logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
       <Link to="/"><h1 >Blog 4 Groups</h1></Link>
      </Navbar.Brand>
 <Container>
      </Navbar>

    </div>
  )
}

export default NavBar