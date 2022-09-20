import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CheckoutStyle } from "../styles/Checkout.style";
import { FormValues, Product } from "../components/interface/interfaces";
import {
  getPrice,
  formatTotal,
  productName,
} from "../components/functions/cartFunctions";
import Confirmation from "../components/pageComponents/Confirmation";

const checkout = () => {
  const [value, setValue] = useState<Product[]>([]);
  const [cod, setCod] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
  };

  useEffect(() => {
    setValue(JSON.parse(window.localStorage.getItem("cart") || "[]"));
  }, []);
  const shipping = 50;
  const grandTotal = formatTotal(getPrice(value), shipping);

  return (
    <>
      {isSubmitSuccessful && <Confirmation items={value} />}
      <CheckoutStyle>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="formInfo">
            <h1 className="pageTitle">Checkout</h1>
            <div className="billingDetails formSection">
              <h2 className="title">Billing Details</h2>
              <div className="inputFields">
                <div className="inputRow">
                  <div className="labelAndInput">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      {...register("firstName", {
                        required: true,
                      })}
                      id="firstName"
                    />
                    {errors.firstName && <p>First name is required</p>}
                  </div>
                  <div className="labelAndInput">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      {...register("lastName", { required: true })}
                      id="lastName"
                    />
                    {errors.lastName && <span>Please enter valid</span>}
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
                    {errors.email && <span>Please enter valid email </span>}
                  </div>
                  <div className="labelAndInput">
                    <label htmlFor="phone">Phone</label>
                    <input
                      {...register("phone", {
                        required: true,
                        pattern:
                          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g,
                        minLength: 6,
                        maxLength: 12,
                      })}
                      id="phone"
                    />
                    {errors.phone && (
                      <span>Please enter valid phone number</span>
                    )}
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
                      {...register("street", { required: true })}
                      id="street"
                    />
                  </div>
                </div>
                <div className="inputRow">
                  <div className="labelAndInput">
                    <label htmlFor="city">City</label>
                    <input
                      {...register("city", { required: true })}
                      id="city"
                    />
                  </div>
                  <div className="labelAndInput">
                    <label htmlFor="state">State</label>
                    <input
                      {...register("state", { required: true })}
                      id="state"
                    />
                  </div>
                </div>
                <div className="inputRow">
                  <div className="labelAndInput">
                    <label htmlFor="country">Country</label>
                    <input
                      {...register("country", { required: true })}
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
                        {...(register("cardNumber", { min: 16, max: 16 }),
                        { required: !cod })}
                        id="cardNumber"
                      />
                    </div>
                    <div className="labelAndInput">
                      <label htmlFor="payment">e-money pin</label>
                      <input
                        {...(register("pin"), { required: !cod })}
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
                    <img src={item.image.desktop} alt="" />
                  </div>
                  <div className="itemInfo">
                    <h6>{productName(item.name)}</h6>
                    <p>${item.price}</p>
                  </div>
                  <div className="counter">x{item.quantity}</div>
                </div>
              );
            })}

            <div className="bottom">
              <div className="total">
                <p>Total</p>
                <p>${value ? getPrice(value) : "0"}</p>
              </div>
              <div className="total">
                <p>Shipping</p>
                <p>${shipping}</p>
              </div>
              <div className="total">
                <p>Grand Total</p>
                <p>${value ? grandTotal : "0"}</p>
              </div>
              <div className="checkoutButton">
                <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </form>
      </CheckoutStyle>
    </>
  );
};

export default checkout;
