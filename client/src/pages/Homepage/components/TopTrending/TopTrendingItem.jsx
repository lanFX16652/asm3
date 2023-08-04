import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";

import classes from "./TopTrending.module.css";
import { parseCurrency } from "../../../../services/index";

const TopTrendingItem = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <Col className={classes["item"]} onClick={() => setShowModal(true)}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.img1} />
          <Card.Body>
            <Card.Title className={classes["card-title"]}>
              {product.name}
            </Card.Title>
            <Card.Text className={classes["card-price"]}>
              {parseCurrency(product.price)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Modal size="xl" centered show={showModal} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Image
                  style={{ width: "100%", height: "100%" }}
                  src={product.img1}
                  rounded
                />
              </Col>
              <Col>
                <h3>{product.name}</h3>
                <h5>{parseCurrency(product.price)}</h5>
                <p>{product.short_desc}</p>
                <Button onClick={() => navigate(`/product/${product._id}`)}>View Detail</Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TopTrendingItem;
