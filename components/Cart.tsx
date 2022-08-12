import React, { useState } from "react";
import { Button } from "../styles/Button.style";
import { CartStyle, CheckoutButton } from "../styles/Cart.Style";

type Props = {};

const Cart = (props: Props) => {
  const [count, setCount] = useState<number>(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 1) {
    } else {
      setCount(count - 1);
    }
  };
  return (
    <CartStyle>
      <div className="card">
        <div className="heading">
          <div className="cartCount">
            <h6>Cart (0)</h6>
          </div>
          <div className="removeButton">
            <button>Remove All</button>
          </div>
        </div>
        <div className="center">
          <div className="itemImg">
            <img src="earphone-shop.png" alt="" />
          </div>
          <div className="itemInfo">
            <h6>XX99 headphones</h6>
            <p>$1599</p>
          </div>
          <div className="counter">
            <Button onClick={decrement}>-</Button>
            {count} <Button onClick={increment}>+</Button>
          </div>
        </div>
        <div className="center">
          <div className="itemImg">
            <img src="earphone-shop.png" alt="" />
          </div>
          <div className="itemInfo">
            <h6>XX99 headphones</h6>
            <p>$1599</p>
          </div>
          <div className="counter">
            <Button onClick={decrement}>-</Button>
            {count} <Button onClick={increment}>+</Button>
          </div>
        </div>
        <div className="bottom">
          <div className="total">
            <h6>Total</h6>
            <p>$1599</p>
          </div>
          <div className="checkoutButton">
            <CheckoutButton>Checkout</CheckoutButton>
          </div>
        </div>
      </div>
    </CartStyle>
  );
};

export default Cart;
