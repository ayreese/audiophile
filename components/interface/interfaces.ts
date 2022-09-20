import { ReactNode } from "react";

export interface Products {
  items: Product[];
}

export interface Item {
  item: Product;
}
export interface Product {
  id: number;
  slug: string;
  name: string;
  image: CategoryImage;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Include[];
  gallery: Gallery;
  others: Other[];
  quantity?: number;
}

export interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Gallery {
  first: CategoryImage;
  second: CategoryImage;
  third: CategoryImage;
}

export interface Include {
  quantity: number;
  item: string;
}

export interface Other {
  slug: string;
  name: string;
  image: CategoryImage;
}

export interface Suggestion {
  name: string;
  img: string;
  type: string;
  id: string;
}

export interface Prop {
  prop: boolean;
}

export type CartProviderProps = {
  children: ReactNode;
};

export type ShoppingCartContext = {
  addItem: (product: Product) => void;
  decrementItem: (product: Product) => void;
  incrementItem: (product: Product) => void;
  clearCart: (prop: string) => void;
  openCart: () => void;
  open: boolean;
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

export enum paymentEnum {
  cod = "cod",
  emoney = "e-money",
}
