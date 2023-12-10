import { Button, Col, Container, Dropdown, DropdownButton, Form, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Search } from "./Search";

export function NavigationBar() {
    return (
        <Container fluid className="MyNavbar">

            <Row>
                <Col lg="2">
                    <h1>Kita<span><i class="fa-solid fa-book-open"></i></span>Bish</h1>
                </Col>
                <Col lg="3">
                    
                    <Search/>
                </Col>
                {/* <Col>
                    
                </Col> */}
                <Col lg="1">
                    <LinkContainer to='/'>
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                </Col>
                <Col log="1">
                    <Dropdown>
                        <Dropdown.Toggle variant="Secondary">
                            Genre
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Self Help</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sci-Fi</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Motivational</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col lg="1">
                    <LinkContainer to='/userlist'>
                        <Nav.Link>Userlist</Nav.Link>
                    </LinkContainer>
                </Col>
                <Col lg="1">
                    <LinkContainer to='/register'>
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
                </Col>
            </Row>
        </Container>
    )
}