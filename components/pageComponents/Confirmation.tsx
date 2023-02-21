import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { formatTotal, getPrice, productName } from "../functions/cartFunctions";
import { Products } from "../interface/interfaces";
import check from "../../public/assets/checkout/icon-order-confirmation.svg"

const Confirmation = ({ items }: Products) => {
  const shipping = 50;
  const grandTotal = formatTotal(getPrice(items), shipping);
  const { clearCart } = useCart();
  const [more, setMore] = useState(false);
  const itemToShow = () => setMore(!more);

  return (
    <div className="confirmation-container">
      <div className="card">
          <Image src={check} alt="success" />
        <h3>
          Thank you <br />
          for your order
        </h3>
        <p>You will receive an email confirmation shortly</p>
        <div className="receipt">
          <div className="left">
            {more ? (
              items.map((item: any) => {
                return (
                  <>
                    <div key={item.id} className="items">
                      <div className="itemImg">
                          <Image src={item.image.mobile} alt="" width={500} height={500}/>
                      </div>
                      <div className="center">
                        <h5> {productName(item.name)}</h5>
                        <p>${item.price}</p>
                      </div>
                      <div className="quantityInfo">
                        <p>x{item.quantity}</p>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <>
                <div className="items">
                  <div className="itemImg">
                    <Image src={items[0].image.desktop} alt="" width={500} height={500}/>
                  </div>
                  <div className="center">
                    <h5> {productName(items[0].name)}</h5>
                    <p>${items[0].price}</p>
                  </div>
                  <div className="quantityInfo">
                    <p>x{items[0].quantity}</p>
                  </div>
                </div>
              </>
            )}
            {more ? (
              <>
                <div className="borderLine"></div>
                <p onClick={itemToShow} className="others">
                  show less
                </p>
              </>
            ) : (
              <>
                <div className="borderLine"></div>
                <p onClick={itemToShow} className="others">
                  and {items.length - 1} other items(s){" "}
                </p>
              </>
            )}
          </div>
          <div className="right">
            <p>Grand total</p>
            <p>{grandTotal}</p>
          </div>
        </div>
        <button
          onClick={() => {
            clearCart("value");
          }}>
          {" "}
          <Link href="/">
            <a>back to home</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
