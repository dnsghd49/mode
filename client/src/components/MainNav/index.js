import './style.css'
import Nav from 'react-bootstrap/Nav'

function MainNav() {
    return (
        <div>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link className='navItem' href="/shop-all">Shop All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='navItem' href="/about">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='navItem' href="/events">Events</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='navItem' href="/fashion-sustainability">Fashion Sustainability</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='navItem' href="/sale">Sale</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default MainNav