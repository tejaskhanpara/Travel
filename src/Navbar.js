import { Button,FormControl,Form,Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import mycss from './mycss.module.css';


function Bars()
{
    return(
        <div>
            <Container>
            <Navbar bg="white" expand="lg">
                <Container fluid>
                    <a href="#" className={mycss.logo}>Travel.</a>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <NavDropdown title="Offer" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Guid</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Package</NavDropdown.Item>
                        <NavDropdown.Item href="#action5">Trip</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action6">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action7" >Package</Nav.Link>
                        <Nav.Link href="#action8" >Reviews</Nav.Link>
                        <Nav.Link href="#action9" >Blogs</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        
                        <Button variant="outline-success">Login</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Container>
        </div>
    )
}

export default Bars