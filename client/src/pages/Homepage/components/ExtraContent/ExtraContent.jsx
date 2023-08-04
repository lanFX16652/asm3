import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./ExtraContent.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const ExtraContent = () => {
  return (
    <Container className="mt-5">
      <Row className={classes.row1}>
        <Col>
          <div className={classes.content}>
            <h3>FREE SHIPPING</h3>
            <p>Free shipping worldwide</p>
          </div>
        </Col>
        <Col>
          <div className={classes.content}>
            <h3>24 X 7 SERVICE</h3>
            <p>Free shipping worldwide</p>
          </div>
        </Col>
        <Col>
          <div className={classes.content}>
            <h3>FESTIVAL OFFER</h3>
            <p>Free shipping worldwide</p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3>LET'S BE FRIENDS!</h3>
          <p>Subcribe us to get promotion newsletter</p>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Enter your email address" />
            <Button variant="dark">Subcribe</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ExtraContent;
