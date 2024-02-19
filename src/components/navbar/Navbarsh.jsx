import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbarsh() {
    const [menu, setMenu] = useState("")

    return (
        <div className='nav-bar'>

            <Navbar expand="lg" className="bg-body-ligt">
                <Container>
                    <Navbar.Brand href="#">
                        <div className="nav-logo">
                            <img src={logo} alt="" />
                            <p>Shopper</p>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ alignItems: 'center' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={() => { setMenu("Shop") }}><Link style={{textDecoration:'none',color:'black'}} to={'./'}>Shop</Link>{menu === 'Shop' ? <hr /> : <></>}</Nav.Link>
                            <Nav.Link onClick={() => { setMenu("Men") }}><Link style={{textDecoration:'none',color:'black'}} to={'./mens'}>Men</Link> {menu === 'Men' ? <hr /> : <></>}</Nav.Link>
                            <Nav.Link onClick={() => { setMenu("Women") }}><Link style={{textDecoration:'none',color:'black'}} to={'./womens'}>Women</Link> {menu === 'Women' ? <hr /> : <></>}</Nav.Link>
                            <Nav.Link onClick={() => { setMenu("Kids") }}><Link style={{textDecoration:'none',color:'black'}} to={'./kids'}>Kids</Link>{menu === 'Kids' ? <hr /> : <></>}</Nav.Link>

                        </Nav>
                        <Form className="nav-login-cart">

                            <Link to={'/Login'}><button>Login</button></Link>

                            <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbarsh
