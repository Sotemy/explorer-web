import { Navbar, Container, Nav } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          navbar
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to='/'>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/login'>
              <FaSignInAlt /> Login
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/register'>
              <FaUser /> Register
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar