import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="navBG">

<Navbar>
  <Container className="navContainer" >
    <Navbar.Brand>
      <Link to="/">
              {" "}
              <img
                alt="Blog4Group"
                src="./B4G_Logo.png"
                width="164"
                height="72"
                className="d-inline-block align-top"
              />
            </Link></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      
      <Link to="/authors" ><Button  className="btn_navBar" variant="light"  size="sm">Authors</Button></Link>
        <Link  to="/" ><Button className="btn_navBar" variant="light"  size="sm">Create post</Button></Link>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>

       {/* <Navbar>
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              {" "}
              <img
                alt="Blog4Group"
                src="./B4G_Logo.png"
                width="164"
                height="72"
                className="d-inline-block align-top logo"
              />
            </Link>        
            <Navbar.Toggle />
            <Link to="/authors">Authors</Link>
          <Link  to="/">Comments</Link>
          </Navbar.Brand>         
        
          </Container>
      </Navbar>  */}
      
    </div>
  );
};

export default NavBar;
