import React, { useEffect } from "react";
import classes from "./TopTrending.module.css";
import Title from "../Title/Title";
import { useGetProducts } from "../../../../apis/product";
import TopTrendingItem from "./TopTrendingItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const TopTrending = () => {
  const [products, isLoading] = useGetProducts();
  
  return (
    <div>
      <Title
        title="MAKE THE HARD WAY"
        subtitle="TOP TRENDING PRODUCTS"
        className={classes.title}
      />
      <Container>
        <Row className={classes['row-custom']}>
          {products.map((product) => (
            <TopTrendingItem key={product._id} product={product} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TopTrending;
