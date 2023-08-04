import React from "react";
import classes from "./Checkout.module.css";
import { NavLink } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const Checkout = () => {
  return (
    <>
      <div
        className={`d-flex justify-content-between align-items-center p-5 fst-italic ${classes.header}`}
      >
        <h1>CHECKOUT</h1>
        <div className={classes["breadcrum"]}>
          <NavLink to="/">HOME / </NavLink>
          <NavLink to="#">CART / </NavLink>
          <NavLink to="/checkout">CHECKOUT</NavLink>
        </div>
      </div>

      <div className="py-4 fst-italic container">
        <h3>BILLING DETAILS</h3>
        <Row>
          <Col xs={12} lg={8}>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>FULL NAME</Form.Label>
                <Form.Control type="text" placeholder="Enter fullname" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>EMAIL</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>PHONE NUMBER</Form.Label>
                <Form.Control type="number" placeholder="Enter phone number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>ADDRESS</Form.Label>
                <Form.Control type="text" placeholder="Enter address" />
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} lg={4}>
            <div className={`p-4 fst-italic ${classes["order-content"]}`}>
              <h3>YOUR ORDER</h3>
              <Row>
                <Col xs={6} className="fw-bold border-bottom py-1">
                  a
                </Col>
                <Col
                  xs={6}
                  className={`border-bottom py-1  ${classes["order-text"]}`}
                >
                  a
                </Col>
                <Col xs={6} className="fw-bold border-bottom py-1">
                  a
                </Col>
                <Col
                  xs={6}
                  className={`border-bottom v  ${classes["order-text"]}`}
                >
                  a
                </Col>

                <Col xs={6}>TOTAL</Col>
                <Col xs={6}>123</Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Button variant="dark">Place Order</Button>
      </div>
    </>
  );
};

export default Checkout;
