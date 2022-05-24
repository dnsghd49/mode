import { useState } from 'react'
import logo from './Fezzan.png'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faClipboardList, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import "./style.css"
import Login from '../Login'
import Signup from '../Signup'

function Topbar() {
    const [signupPopup, setSignupPopup] = useState(false)
    const [loginPopup, setLoginPopup] = useState(false)

    return (
        <Navbar className='navStyle' expand={false} >
            <Container fluid>
                <Col sm="0">
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id='offcanvasNavbar'
                        aria-labelledby="offcanvasNavbarLabel"
                        placement='start'
                        className='sideBar'
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id='offcanvasNavbarLabel'>
                                <Navbar.Brand href="/">
                                    <img style={{ paddingLeft: '1em', height: '80px', width: '100px' }} src={logo} alt='LOGO' />
                                </Navbar.Brand>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-grow-1 pe-3">
                                <NavDropdown className='sideBarItem' title="Men" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#">Shop all</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Top</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Pants</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Jackets & Outerwear</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Activewear</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Undergarments</NavDropdown.Item>

                                </NavDropdown>

                                <NavDropdown className='sideBarItem' title="Women" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#">Shop all</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Top</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Bottom</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Jacket & Outerwear</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Skirt</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Sweaters</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Dresses</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Lingerie & Sleepwear</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Loungewear</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Activewear</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Swimwear</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Jumpsuits</NavDropdown.Item>
                                    {/* <NavDropdown.Divider />
                                    <NavDropdown.Item href="#LMFAOOOOOOOOO">
                                        Divider here, nothing to see lmao
                                    </NavDropdown.Item> */}
                                </NavDropdown>

                                <NavDropdown className='sideBarItem' title="Accessories" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#">Shop all</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Jewelry</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Bags</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Hats</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Hair accessories</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Belts</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Scarves</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Socks</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Sunglasses</NavDropdown.Item>
                                </NavDropdown>

                                {/* <div className='dropdown'>
                                    <Nav.Link className='sideBarItem'>Men</Nav.Link>
                                    <div className='dropdown-content'>
                                        <Nav.Link className='sideBarItem' href="/men">Men</Nav.Link>
                                    </div>
                                </div> */}
                                <Nav.Link className='sideBarItem' href="/shoes">Shoes</Nav.Link>
                                <Nav.Link className='sideBarItem' href="/brands">Brands</Nav.Link>
                                <Nav.Link className='sideBarItem' href="/small-designers">Small Designers</Nav.Link>
                                <Nav.Link className='sideBarItem' href="/contact-us">Contact Us</Nav.Link>
                                <Nav.Link className='sideBarItem' href="/faq">FAQ</Nav.Link>
                                <Nav.Link className='sideBarItem' href="/">Sale</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    <Navbar.Brand href="/">
                        <img style={{ paddingLeft: '1em', height: 'auto', width: '120px' }} src={logo} alt='LOGO' />
                    </Navbar.Brand>
                </Col>
                {/* login buttons should go to the hidden menu, all the way down to the bottom, login func needed */}
                <Col sm="0" style={{ display: "flex" }}>
                    <Nav.Link href="/wishlist" >
                        <FontAwesomeIcon className='fa-lg icon' icon={faClipboardList} />
                    </Nav.Link>
                    <Nav.Link href="/cart" >
                        <FontAwesomeIcon className='fa-lg icon' icon={faCartShopping} />
                    </Nav.Link>
                    <Nav.Link href="/notifications " >
                        <FontAwesomeIcon className='fa-lg icon' icon={faCommentDots} />
                    </Nav.Link>
                    
                    <Nav.Link className="loginBtn" onClick={() => setSignupPopup(true)}>SIGN UP</Nav.Link>
                    <Signup trigger={signupPopup} setTrigger={setSignupPopup} />

                    <Nav.Link className="loginBtn" onClick={() => setLoginPopup(true)}>LOG IN</Nav.Link>
                    <Login trigger={loginPopup} setTrigger={setLoginPopup} />
                </Col>
            </Container>
        </Navbar>
    )
}

export default Topbar