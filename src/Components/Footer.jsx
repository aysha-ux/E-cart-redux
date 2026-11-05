import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faArrowRight, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer style={{ backgroundColor: '#336699', borderRadius: '40px 40px 0 0' }} className="text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h4><FontAwesomeIcon icon={faTruckFast} className="me-2" />DailyCart</h4>
            <p className="small">Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
            <p className="small">Code licensed Luminar, docs CC BY 3.0.</p>
            <p className="small">Currently v5.3.2.</p>
          </Col>

          <Col md={2}>
            <h5>Links</h5>
            <div className="small">
              <div>Home</div>
              <div>Wishlist</div>
              <div>Cart</div>
            </div>
          </Col>

          <Col md={2}>
            <h5>Guides</h5>
            <div className="small">
              <div>React</div>
              <div>React Bootstrap</div>
              <div>React Router</div>
            </div>
          </Col>

          <Col md={4}>
            <h5>Contact Us</h5>
            <div className="d-flex align-items-center mb-3" style={{ maxWidth: '250px' }}>
              <Form.Control size="sm" placeholder="Email Here" />
              <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
            </div>
            <div className="d-flex gap-3">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faEnvelope} />
              <FontAwesomeIcon icon={faPhone} />
            </div>
          </Col>
        </Row>

        <p className="text-center fw-bold small mt-4 mb-0">
          Copyright © August 2025 Batch, Daily Cart. Built with React Redux.
        </p>
      </Container>
    </footer>
  )
}

export default Footer