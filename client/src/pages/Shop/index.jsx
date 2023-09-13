import React from "react";
import { useGetProducts } from "../../apis/product";
import { Card, Col, Row, Spin, Typography } from "antd";
import { parseCurrency } from "../../services";
import classes from "./Shop.module.css";
import Container from "react-bootstrap/esm/Container";
const Shop = () => {
  const [products, isLoading] = useGetProducts();

  return (
    <Spin spinning={isLoading}>
      <Container>
        <Typography.Title level={1}>Shop</Typography.Title>
        <Row gutter={[12, 24]}>
          {products.map((product) => {
            return (
              <Col sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  cover={<img alt={product.name} src={product.img1} />}
                >
                  <Card.Meta
                    title={
                      <p style={{ textAlign: "center" }}>{product.name}</p>
                    }
                    description={
                      <p className={classes.price}>
                        {" "}
                        {parseCurrency(product.price)}
                      </p>
                    }
                  ></Card.Meta>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Spin>
  );
};

export default Shop;
