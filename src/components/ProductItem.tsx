import React, { useState } from "react";
import { useCartContext } from "../context/CartContextProvider";

interface ProductDetailsProps {
  productName: string;
  price: number;
  description: string;
  sizes: string[];
}

interface ProductItemProps {
  imgSrc: string;
  details: ProductDetailsProps;
}

const ProductSize = ({
  active,
  displayName,
  onClick,
}: {
  active: boolean;
  displayName: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`border-[1px] border-light-grey text-secondary-font text-sm w-[38px] h-[38px] mr-1 transition-all ${
        active ? "text-primary-font border-dark-grey border-[2px]" : null
      }`}
    >
      {displayName}
    </button>
  );
};

const ProductDetails = (props: ProductDetailsProps) => {
  const { productName, price, description, sizes } = props;
  const [selectedSize, setSelectedSize] = useState("");

  const cartContext = useCartContext();
  const { setCartItems } = cartContext;

  const addToCart = () => {
    setCartItems((cartItems) => [
      ...cartItems,
      { productName, price, size: selectedSize, quantity: 1 },
    ]);
  };

  return (
    <div className="basis-[50%] flex flex-col items-start prose">
      <h2 className="w-full text-primary-font font-normal pb-4 border-b-[1px] border-light-grey">
        {productName}
      </h2>

      <span className="w-full text-primary-font font-bold border-b-[1px] border-light-grey text-sm pb-2">{`$${price}.00`}</span>

      <p className="text-left text-secondary-font text-sm">{description}</p>

      <h6 className="text-secondary-font text-xs font-bold mt-3 mb-2 uppercase after:content-['*'] after:text-required-star">
        size
      </h6>
      <div className="flex flex-row">
        {sizes.map((size) => (
          <ProductSize
            key={size}
            active={size === selectedSize}
            displayName={size}
            onClick={() => {
              setSelectedSize(size);
              console.log(size);
            }}
          />
        ))}
      </div>

      <button
        disabled={selectedSize === ""}
        onClick={addToCart}
        className={`uppercase border-2 border-dark-grey text-primary-font font-semibold pl-4 pr-4 pt-2 pb-2 text-sm mt-6 hover:bg-dark-grey hover:text-white hover:transition-all ${
          selectedSize === "" ? "cursor-not-allowed" : null
        }`}
      >
        add to cart
      </button>
    </div>
  );
};

const ProductItem = ({ imgSrc, details }: ProductItemProps) => {
  const { description, price, productName, sizes } = details;

  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-between">
      <div className="basis-basis-[40%] mb-4">
        <img
          className="w-auto max-h-[400px] md:max-h-[550px]"
          src={imgSrc}
          alt="product"
        />
      </div>

      <ProductDetails
        description={description}
        price={price}
        productName={productName}
        sizes={sizes}
      />
    </div>
  );
};

export default ProductItem;
