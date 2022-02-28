import React from "react";

import PageLayout from "../components/PageLayout";
import ProductItem from "../components/ProductItem";
import { product } from "../data";

import ProductImg from "../assets/classic-tee.jpg";

const HomePage = () => {
  return (
    <PageLayout>
      <ProductItem
        imgSrc={ProductImg}
        details={{
          productName: product.name,
          description: product.description,
          price: product.price,
          sizes: product.sizes,
        }}
      />
    </PageLayout>
  );
};

export default HomePage;
