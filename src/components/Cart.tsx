import React, { useState } from "react";
import { useCartContext } from "../context/CartContextProvider";
import ProductImg from "../assets/classic-tee.jpg";

const CartItem = ({
  imgSrc,
  productName,
  quantity,
  price,
  size,
}: {
  imgSrc: string;
  productName: string;
  quantity: number;
  price: number;
  size: string;
}) => {
  return (
    <div className="flex flex-row prose prose-sm">
      <img className="mr-4 max-w-[80px]" src={ProductImg} alt="item" />
      <div className="flex flex-col items-start">
        <h6>{productName}</h6>
        <h6>
          {quantity}x{" "}
          <span className="font-bold">
            {"$"}
            {price}
          </span>
        </h6>
        <h6>Size: {size}</h6>
      </div>
    </div>
  );
};

const Cart = () => {
  const [isActive, setIsActive] = useState(false);
  const cartContext = useCartContext();

  const { cartItems } = cartContext;

  return (
    <div className="flex flex-col ml-auto items-end relative max-w-[240px]">
      <button
        className={`border-l-[1px] border-t-[1px] border-r-[1px] border-b-[1px] border-b-white z-[2] ${
          isActive ? "border-light-grey bg-white" : "border-header-brackground"
        } `}
        onClick={() => setIsActive(!isActive)}
        onBlur={() => setIsActive(false)}
      >
        <span className="pl-2 pr-2 text-xs">
          My Cart{`(${cartItems.length})`}
        </span>
      </button>

      <div
        className={`flex flex-col p-4 items-start absolute top-7 border-[1px] mt-[-3px] bg-white border-light-grey w-full z-[1] ${
          !isActive ? "hidden" : null
        }`}
      >
        {cartItems.map((item, i) => (
          <CartItem
            key={`${item.productName}-${i}`}
            imgSrc=""
            productName={item.productName}
            quantity={item.quantity}
            price={item.price}
            size={item.size}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
