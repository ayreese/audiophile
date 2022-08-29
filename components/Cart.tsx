import React, { useEffect, useState } from "react";
import { Button } from "../styles/Button.style";
import { CartStyle, CheckoutButton } from "../styles/Cart.Style";
import { Product } from "../components/interface/interfaces";
import { useCart } from "../context/CartContext";
import { getPrice, numberOfItems } from "./functions/cartFunctions";
import Link from "next/link";

const Cart = () => {
  const [value, setValue] = useState<Product[]>([]);
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const { decrementItem, clearCart, incrementItem } = useCart();

  useEffect(() => {
    setValue(JSON.parse(window.localStorage.getItem("cart") || "[]"));
    setCount(numberOfItems(value));
    setTotal(getPrice(value));
  }, [value]);

  return (
    <CartStyle>
      <div className="card">
        <div className="heading">
          <div className="cartCount">
            <h6>{`Cart (${count})`}</h6>
          </div>
          <div className="removeButton">
            <button
              onClick={() => {
                clearCart("value");
              }}>
              Remove All
            </button>
          </div>
        </div>

        {value.map((item: Product) => {
          return (
            <div key={item.id} className="center">
              <div className="itemImg">
                <img src={item.img} alt="" />
              </div>
              <div className="itemInfo">
                <h6>{item.name}</h6>
                <p>${item.price}</p>
              </div>
              <div className="counter">
                <Button
                  onClick={() => {
                    decrementItem(item);
                  }}>
                  -
                </Button>
                {item.quantity}{" "}
                <Button
                  onClick={() => {
                    incrementItem(item);
                  }}>
                  +
                </Button>
              </div>
            </div>
          );
        })}

        <div className="bottom">
          <div className="total">
            <h6>Total</h6>
            <p>${total}</p>
          </div>
          <div className="checkoutButton">
            <CheckoutButton primary={true}>
              <Link href="/checkout">
                <a>checkout</a>
              </Link>
            </CheckoutButton>
          </div>
        </div>
      </div>
    </CartStyle>
  );
};

export default Cart;
