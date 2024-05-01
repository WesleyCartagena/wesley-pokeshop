import './index.scss'
import React from "react"
import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import PokeShopImg from '../../assets/logo512.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Topbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 575);
      };

      handleResize(); // Call initially to set isMobile state
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    return(
      <Navbar className='wc-navbar' expand='sm' collapseOnSelect>
            <Link className='logo' to = '/'>
                <img className="letter-logo" alt="" width="40" src={PokeShopImg} height="40"/>
            </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{  background:'#0075BE', color:'white', marginRight:'15px' ,marginBottom:'10px'}} />
          <Navbar.Collapse className='text-center' id="basic-navbar-nav">
            <Nav className='navbar-middle justify-content-start'>
              <Nav.Item className='navbar-middle-item p-1'>
                <LinkContainer to="/">
                  <Nav.Link className='navbar-middle-item-text' id="home-link" eventKey="home">Home</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
            {/* Render LinkedIn and GitHub links inside collapse for mobile */}
            {isMobile && (
              <Nav className='navbar-middle justify-content-end'>
                <Nav.Item className='navbar-middle-item pt-2'>
                    <LinkContainer to="search">
                        <Nav.Link className='text-decoration-none navbar-middle-item-text' id="search-mobile" eventKey="search">Search</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item className='navbar-middle-item pt-3'>
                    <LinkContainer to="cart">
                        <Nav.Link className='text-decoration-none navbar-middle-item-text' id="cart-mobile" eventKey="cart" style={{hover:'yellow'}}>Cart</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
              </Nav>
            )}
          </Navbar.Collapse>
          {/* Render LinkedIn and GitHub links outside collapse for desktop */}
          {!isMobile && (
            <Nav className='navbar-middle justify-content-end'>
              <Link className='navbar-end' to="search">
                <Navbar.Brand className='navbar-end-icons' id="search">
                  <FontAwesomeIcon icon={faMagnifyingGlass} color="white" />
                </Navbar.Brand>
              </Link>
              <Link className='navbar-end' to="/cart">
                <Navbar.Brand className='navbar-end-icons' id="cart">
                  <FontAwesomeIcon icon={faCartShopping} color="white" />
                </Navbar.Brand>
              </Link>
            </Nav>
          )}
      </Navbar>
    ) 
}
export default Topbar