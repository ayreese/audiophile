import { createContext, useContext } from "react";
import { useLocalStorage } from "../components/hooks/useLocalStorage";
import {
  CartProviderProps,
  Product,
  ShoppingCartContext,
} from "../components/interface/interfaces";

const CartContext = createContext({} as ShoppingCartContext);

export const useCart = () => useContext(CartContext);

export const CartContextProvider = ({ children }: CartProviderProps) => {
  const [value, setValue] = useLocalStorage<Product[]>("cart", []);

  const addItem = (cartItem: Product) => {
    if (value.find((item) => item.id === cartItem.id)) {
      setValue((value) => {
        return value.map((item) => {
          if (item.id === cartItem.id) {
            return { ...item, quantity: item.quantity + cartItem.quantity };
          } else {
            return { ...item };
          }
        });
        0;
      });
      setValue(value);
    } else {
      setValue((value) => {
        console.log([...value, cartItem]);
        return [...value, cartItem];
      });
    }
  };

  const incrementItem = (cartItem: Product) => {
    setValue((items) => {
      return items.map((item) => {
        if (item.id === cartItem.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item };
        }
      });
    });
  };

  const decrementItem = (cartItem: Product) => {
    const itemToDecrement = value.find((item) => item.id === cartItem.id);
    const itemToRemove = value.findIndex((item) => item.id === cartItem.id);
    if (itemToDecrement?.quantity === 1 && value.length === 1) {
      setValue([]);
    }
    if (itemToDecrement && itemToDecrement.quantity === 1) {
      setValue((items) => {
        return items.filter((itemsToKeep) => itemsToKeep.id !== cartItem.id);
      });
    } else {
      setValue((items) => {
        return items.map((item) => {
          if (item.id === cartItem.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return { ...item };
          }
        });
      });
    }
  };

  const clearCart = (prop: string) => {
    setValue([]);
  };

  return (
    <CartContext.Provider
      value={{ addItem, decrementItem, clearCart, incrementItem }}>
      {" "}
      {children}
    </CartContext.Provider>
  );
};
