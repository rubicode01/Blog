import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Image } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="navBG">
      <Navbar>
        <Container>
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
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
