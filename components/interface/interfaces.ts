import { ReactNode } from "react";

export interface Product {
  name: string;
  img: string;
  galleryImageOne: string;
  firstFeature: string;
  price: string;
  galleryImageTwo: string;
  galleryImageThree: string;
  description: string;
  secondFeature: string;
  id: string;
  quantity: number;
}

export type CartProviderProps = {
  children: ReactNode;
};

export type ShoppingCartContext = {
  addItem: (product: Product) => void;
  decrementItem: (product: Product) => void;
  incrementItem: (product: Product) => void;
  clearCart: (prop: string) => void;
};

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  payment: string;
  cardNumber: string;
  pin: string;
};
