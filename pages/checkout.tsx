import React from "react";
import { useForm } from "react-hook-form";
import { CheckoutStyle } from "../styles/Checkout.style";

type FormValues = {
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
};

const checkout = () => {
  const { register } = useForm<FormValues>();
  return (
    <CheckoutStyle>
      <form action="">
        <h1 className="pageTitle">Checkout</h1>

        <div className="billingDetails formSection">
          <h2 className="title">Billing Details</h2>
          <div className="inputFields">
            <div className="labelAndInput">
              <label htmlFor="firstName">First Name</label>
              <input {...register("firstName")} id="firstName" />
            </div>
            <div className="labelAndInput">
              <label htmlFor="lastName">Last Name</label>
              <input {...register("lastName")} id="lastName" />
            </div>
            <div className="labelAndInput">
              <label htmlFor="email">Email</label>
              <input {...register("email")} id="email" />
            </div>
            <div className="labelAndInput">
              <label htmlFor="phone">Phone</label>
              <input {...register("phone")} id="phone" />
            </div>
          </div>
        </div>

        <div className="billingDetails formSection">
          <h2 className="title">Shipping</h2>
          <div className="inputFields">
            <div className="labelAndInput">
              <label htmlFor="street">Street</label>
              <input {...register("street")} id="street" />
            </div>
            <div className="labelAndInput">
              <label htmlFor="city">City</label>
              <input {...register("city")} id="city" />
            </div>
            <div className="labelAndInput">
              <label htmlFor="state">State</label>
              <input {...register("state")} id="state" />
            </div>
            <div className="labelAndInput">
              <label htmlFor="country">Country</label>
              <input {...register("country")} id="country" />
            </div>
          </div>
        </div>

        <div className="billingDetails formSection">
          <h2 className="title">Payment</h2>
          <div className="inputFields">
            <div className="payment">
              <label htmlFor="payment">e-money</label>
              <input type="radio" {...register("payment")} id="payment" />
              <label htmlFor="payment">cod</label>

              <input type="radio" {...register("payment")} id="payment" />
            </div>
          </div>
        </div>
      </form>
    </CheckoutStyle>
  );
};

export default checkout;
