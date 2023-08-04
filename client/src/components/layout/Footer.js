import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer_container}>
      <Container>
        <Row>
          <Col className={classes.column} sm>
            <h4>CUSTOMER SERVICE</h4>
            <div className={classes.a_wrap}>
              <a href="#">Help Contact us</a>
              <a href="#">Returns Refunds</a>
              <a href="#">Online Stores</a>
              <a href="#">Terms Conditions</a>
            </div>
          </Col>
          <Col className={classes.column} sm>
            <h4>COMPANY</h4>
            <div className={classes.a_wrap}>
              <a href="#">What We Do</a>
              <a href="#">Available Services</a>
              <a href="#">Latest Posts</a>
              <a href="#">FAQs</a>
            </div>
          </Col>
          <Col className={classes.column} sm>
            <h4>SOCIAL MEDIA</h4>
            <div className={classes.a_wrap}>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Pinterest</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
