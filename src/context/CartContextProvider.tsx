import React, { ReactNode, createContext, useContext, useState } from "react";

type CartItem = {
  productName: string;
  quantity: number;
  price: number;
  size: string;
};

interface ICartContext {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartContext = createContext<ICartContext | null>(null);

export const useCartContext = () => useContext(CartContext) as ICartContext;

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
