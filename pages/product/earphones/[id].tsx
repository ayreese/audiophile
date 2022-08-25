import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import { db } from "../../../clientApp";
import { Product } from "../../../components/interface/interfaces";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import {
  Features,
  ProductInfoStyle,
  ProductPhotos,
} from "../../../styles/ProductInfoStyle";
import Info from "../../../components/Info";
import { Button } from "../../../styles/Button.style";
import { useCart } from "../../../context/CartContext";
import ProductType from "../../../components/ProductType";

const Details: NextPage<{ product: string }> = ({ product }) => {
  const { addItem } = useCart();
  const productJsonString: string = product;
  const item: Product = JSON.parse(productJsonString);
  const [quantity, setQuantity] = useState<number>(1);
  let cartItem = Object.assign(item, { quantity: quantity });
  const increment = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };
  const decrement = () => {
    if (quantity === 1) {
    } else {
      setQuantity((currentQuantity) => currentQuantity - 1);
    }
  };

  return (
    <>
      <ProductInfoStyle>
        <div className="product-wrapper">
          <div className="left">
            <img src={item.img} alt="" />
          </div>
          <div className="right">
            <p>new product</p>
            <h2>{item.name} wireless earphones</h2>
            <p>{item.description}</p>
            <p className="price">${item.price}</p>
            <div className="buttons">
              <div className="counter">
                <Button onClick={() => decrement()}>-</Button>
                {quantity} <Button onClick={() => increment()}>+</Button>
              </div>
              <Button
                onClick={() => {
                  addItem(cartItem);
                }}
                primary={true}>
                add to cart
              </Button>
            </div>
          </div>
        </div>
      </ProductInfoStyle>
      <Features>
        <div className="product-features">
          <h3>features</h3>
          <p>{item.firstFeature}</p>
          <p>{item.secondFeature}</p>
        </div>
        <div className="box-features">
          <h3>in the box</h3>
          <div className="box-content">
            <div className="content">
              <p className="count">2X</p>
              <p className="item">Earphone Unit</p>
            </div>
            <div className="content">
              <p className="count">6X</p>
              <p className="item">Multi-size Earplugs</p>
            </div>
            <div className="content">
              <p className="count">1X</p>
              <p className="item">users manual</p>
            </div>
            <div className="content">
              <p className="count">1X</p>
              <p className="item">USB-C Charging Cable</p>
            </div>
            <div className="content">
              <p className="count">1X</p>
              <p className="item">Travel Pouch</p>
            </div>
          </div>
        </div>
      </Features>
      <ProductPhotos>
        <div className="left">
          <img src={item.galleryImageOne} alt="" />
          <img src={item.galleryImageTwo} alt="" />
        </div>
        <div className="right">
          <img src={item.galleryImageThree} alt="" />
        </div>
      </ProductPhotos>
      <ProductType />
      <Info />
    </>
  );
};

export default Details;

export const getStaticPaths: GetStaticPaths = async () => {
  const collectRef = collection(db, "earphones");
  const data = await getDocs(collectRef).then((snapshot) => {
    let products: any[] = [];
    snapshot.docs.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  });

  const paths = data.map((product: any) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const id = params?.id;
  const docRef = doc(db, "earphones", id);
  const data = await getDoc(docRef);
  const dataWithId = { ...data.data(), id: data.id };

  return {
    props: { product: JSON.stringify(dataWithId) || null },
  };
};
