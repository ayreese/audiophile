import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CheckoutStyle } from "../styles/Checkout.style";
import { FormValues, Product } from "../components/interface/interfaces";
import { useLocalStorage } from "../components/hooks/useLocalStorage";
import { CartStyle, CheckoutButton } from "../styles/Cart.Style";
import Link from "next/link";
import { getPrice } from "../components/functions/cartFunctions";

const checkout = () => {
  const [value, setValue] = useState<Product[]>([]);
  const [cod, setCod] = useState(false);
  const { register, handleSubmit, watch } = useForm<FormValues>();

  useEffect(() => {
    setValue(JSON.parse(window.localStorage.getItem("cart") || "[]"));
    // console.log(watch("payment", "cod"));
  }, [value]);
  const shipping = 50;
  const grandTotal = getPrice(value) + shipping;

  return (
    <CheckoutStyle>
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>
        <div className="formInfo">
          <h1 className="pageTitle">Checkout</h1>

          <div className="billingDetails formSection">
            <h2 className="title">Billing Details</h2>
            <div className="inputFields">
              <div className="inputRow">
                <div className="labelAndInput">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    {...(register("firstName"), { required: true })}
                    id="firstName"
                  />
                </div>
                <div className="labelAndInput">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    {...(register("lastName"), { required: true })}
                    id="lastName"
                  />
                </div>
              </div>
              <div className="inputRow">
                <div className="labelAndInput">
                  <label htmlFor="email">Email</label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    id="email"
                  />
                </div>
                <div className="labelAndInput">
                  <label htmlFor="phone">Phone</label>
                  <input
                    {...register("phone", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                    })}
                    id="phone"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="billingDetails formSection">
            <h2 className="title">Shipping</h2>
            <div className="inputFields">
              <div className="inputRow">
                <div className="labelAndInput">
                  <label htmlFor="street">Street</label>
                  <input
                    {...(register("street"), { required: true })}
                    id="street"
                  />
                </div>
              </div>
              <div className="inputRow">
                <div className="labelAndInput">
                  <label htmlFor="city">City</label>
                  <input
                    {...(register("city"), { required: true })}
                    id="city"
                  />
                </div>
                <div className="labelAndInput">
                  <label htmlFor="state">State</label>
                  <input
                    {...(register("state"), { required: true })}
                    id="state"
                  />
                </div>
              </div>
              <div className="inputRow">
                <div className="labelAndInput">
                  <label htmlFor="country">Country</label>
                  <input
                    {...(register("country"), { required: true })}
                    id="country"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="paymentInfo formSection">
            <h2 className="title">Payment Details</h2>
            <div id="paymentSection" className="inputFields">
              <div className="inputRow">
                <h3>payment method</h3>
                <div className="paymentMethod">
                  <div className="paymentType">
                    <input
                      type="radio"
                      value="e-money"
                      onClick={() => setCod(false)}
                      {...register("payment")}
                      id="payment"
                    />
                    <label htmlFor="payment">e-money</label>
                  </div>
                  <div className="paymentType">
                    <input
                      type="radio"
                      value="cod"
                      onClick={() => setCod(true)}
                      {...register("payment")}
                      id="payment"
                    />
                    <label htmlFor="payment">cod</label>
                  </div>
                </div>
              </div>
            </div>
            {!cod ? (
              <div className="inputRow">
                <div className="paymentCredentials">
                  <div className="labelAndInput">
                    <label htmlFor="payment">e-money number</label>
                    <input
                      {...(register("cardNumber"), { required: true })}
                      id="cardNumber"
                    />
                  </div>
                  <div className="labelAndInput">
                    <label htmlFor="payment">e-money pin</label>
                    <input
                      {...(register("pin"), { required: true })}
                      id="pin"
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="card">
          <div className="heading">Summary</div>

          {value?.map((item: Product) => {
            return (
              <div key={item.id} className="center">
                <div className="itemImg">
                  <img src={item.img} alt="" />
                </div>
                <div className="itemInfo">
                  <h6>{item.name}</h6>
                  <p>${item.price}</p>
                </div>
                <div className="counter">x{item.quantity}</div>
              </div>
            );
          })}

          <div className="bottom">
            <div className="total">
              <p>Total</p>
              <p>${value ? getPrice(value) : 0}</p>
            </div>
            <div className="total">
              <p>Shipping</p>
              <p>${shipping}</p>
            </div>
            <div className="total">
              <p>Grand Total</p>
              <p>${value ? grandTotal : 0}</p>
            </div>
            <div className="checkoutButton">
              <input type="submit" placeholder="Submit" />
            </div>
          </div>
        </div>
      </form>
    </CheckoutStyle>
  );
};

export default checkout;
