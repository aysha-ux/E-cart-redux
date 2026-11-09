import { faCartPlus, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge  from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice'


function Header({insideProduct}) {
    const dispatch=useDispatch()
   return (
    <Navbar expand="lg" className="bg-primary fixed-top">
        <Container>
            <Navbar.Brand as={Link} to={"/"} className="text-light text-decoration-none fw-bold">
                <FontAwesomeIcon icon={faTruckFast} className="me-2" />
                E-Cart
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    {
                        insideProduct && <Nav.Item>
                            <input
                                onChange={(e) => dispatch(searchProduct(e.target.value))}
                                type="search"
                                className="form-control"
                                placeholder="Search your products"
                            />
                        </Nav.Item>
                    }

                    <Link to={"/wishlist"} className="text-light text-decoration-none fw-bold ms-5">
                        <FontAwesomeIcon icon={faHeart} className="btn btn-danger me-2" />
                        Wishlist <Badge pill bg="secondary">10</Badge>
                    </Link>

                    <Link to={"/cart"} className="text-light text-decoration-none fw-bold ms-5">
                        <FontAwesomeIcon icon={faCartPlus} className="btn btn-success me-2" />
                        Cart <Badge pill bg="secondary">10</Badge>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
}
    


export default Header