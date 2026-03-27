import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTruckFast,
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="text-light mt-5 bg-primary ">

      <Container fluid className="py-5 px-5">

        <Row>

          {/* Left Section */}
          <Col md={4}>
            <h4 className="fw-bold">
              <FontAwesomeIcon icon={faTruckFast} className="me-2" />
              DailyCart
            </h4>

            <p className="mt-3">
              Designed and built with all the love in the world by the
              Luminar team with the help of our contributors.
            </p>

            <p>Code licensed Luminar, docs CC BY 3.0.</p>
            <p>Currently v5.3.2.</p>
          </Col>

          {/* Links */}
          <Col md={2}>
            <h5>Links</h5>
            <div className="d-flex flex-column">
              <Link to="/" className="text-light text-decoration-none">Home</Link>
              <Link to="/wishlist" className="text-light text-decoration-none">Wishlist</Link>
              <Link to="/cart" className="text-light text-decoration-none">Cart</Link>
            </div>
          </Col>

          {/* Guides */}
          <Col md={3}>
            <h5>Guides</h5>
            <p className="mb-1">React</p>
            <p className="mb-1">React Bootstrap</p>
            <p className="mb-1">React Router</p>
          </Col>

          {/* Contact */}
          <Col md={3}>
            <h5>Contact Us</h5>

            <div className="d-flex mb-3">
              <Form.Control
                type="email"
                placeholder="Email Here"
              />
              <Button variant="light" className="ms-2">→</Button>
            </div>

            <div className="d-flex gap-3 fs-5">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faEnvelope} />
              <FontAwesomeIcon icon={faPhone} />
            </div>
          </Col>

        </Row>

      </Container>

      {/* Bottom */}
      <div className="text-center py-3 border-top">
        Copyright © August 2025 Batch, Daily Cart. Built with React Redux.
      </div>

    </div>
  )
}

export default Footer