import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

/* Routes */
import Home from "../pages/Home";
import Onchain from "../pages/Onchain";
import Offchain from "../pages/Offchain";
import Faq from "../pages/Faq";
import Examples from "../pages/Examples";
import Contact from "../pages/Contact";
import NoPage from "../pages/NoPage";

function NavBarComponent() {
  return (
    <Router>
      <>
        <Navbar collapseOnSelect expand="sm" bg="light" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="HIP412 logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                  <Nav.Link as={Link} to={"/onchain"}>NFT validation</Nav.Link>
                  <Nav.Link as={Link} to={"/metadata"}>Metadata validation</Nav.Link>
                  <Nav.Link as={Link} to={"/faq"}>FAQ</Nav.Link>
                  <Nav.Link as={Link} to={"/examples"}>Examples</Nav.Link>
                  <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/onchain" element={<Onchain/>} />
        <Route path="/metadata" element={<Offchain />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default NavBarComponent;