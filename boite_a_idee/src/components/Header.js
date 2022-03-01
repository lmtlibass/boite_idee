import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header(){
    return (
        <div>
            <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="Brand">Boite idées</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Link to={"/idees"} className="Link">idees</Link>
                    <Link to={"/statistiques"} className="Link">Statistiques</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
}