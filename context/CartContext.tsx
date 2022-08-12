import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../clientApp";
import { Product } from "../components/interface/interfaces";

const CartContext = createContext<any>({});

export const useCart = () => useContext(CartContext);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  let cart: Product[] = [];

  const addItem = ({ product }: any) => {
    cart.push(product);
  };

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {" "}
      {children}
    </CartContext.Provider>
  );
};
