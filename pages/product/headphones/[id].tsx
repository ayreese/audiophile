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
import ProductType from "../../../components/ProductType";
import Info from "../../../components/Info";
import { Button } from "../../../styles/Button.style";
import { useCart } from "../../../context/CartContext";

const Details: NextPage<{ product: Product }> = ({ product }: any) => {
  const { cart, addItem } = useCart();
  console.log("this is the cart", cart);
  const newProduct = JSON.parse(product);
  const [count, setCount] = useState<number>(1);
  const [item, setItem] = useState<Product>(newProduct);
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
    <>
      <ProductInfoStyle>
        <div className="product-wrapper">
          <div className="left">
            <img src={newProduct.img} alt="" />
          </div>
          <div className="right">
            <p>new product</p>
            <h2>{newProduct.name}</h2>
            <p>{newProduct.description}</p>
            <p className="price">${newProduct.price}</p>
            <div className="buttons">
              <div className="counter">
                <Button onClick={decrement}>-</Button>
                {count} <Button onClick={increment}>+</Button>
              </div>
              <Button primary={true} onClick={addItem(item)}>
                add to cart
              </Button>
            </div>
          </div>
        </div>
      </ProductInfoStyle>
      <Features>
        <div className="product-features">
          <h3>features</h3>
          <p>{newProduct.firstFeature}</p>
          <p>{newProduct.secondFeature}</p>
        </div>
        <div className="box-features">
          <h3>in the box</h3>
          <div className="box-content">
            <div className="content">
              <p className="count">1X</p>
              <p className="item">headphone unit</p>
            </div>
            <div className="content">
              <p className="count">2X</p>
              <p className="item">Replacement Earcups</p>
            </div>
            <div className="content">
              <p className="count">1X</p>
              <p className="item">User Manual</p>
            </div>
            <div className="content">
              <p className="count">1X</p>
              <p className="item">3.5mm 5m Audio Cable</p>
            </div>
            <div className="content">
              <p className="count">1X</p>
              <p className="item">Travel Bag</p>
            </div>
          </div>
        </div>
      </Features>
      <ProductPhotos>
        <div className="left">
          <img src={newProduct.galleryImageOne} alt="" />
          <img src={newProduct.galleryImageTwo} alt="" />
        </div>
        <div className="right">
          <img src={newProduct.galleryImageThree} alt="" />
        </div>
      </ProductPhotos>
      <ProductType />
      <Info />
    </>
  );
};

export default Details;

export const getStaticPaths: GetStaticPaths = async () => {
  const collectRef = collection(db, "headphones");
  const data = await getDocs(collectRef).then((snapshot) => {
    let products: any[] = [];
    snapshot.docs.forEach((doc) => {
      // console.log("doc data", doc);
      // const dataObject = doc.data;
      products.push({ ...doc.data(), id: doc.id });
      // console.log("products array", products[0]);
    });
    console.log(products);
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
  console.log(id);

  const docRef = doc(db, "headphones", id);
  const data = await getDoc(docRef);

  return {
    props: { product: JSON.stringify(data.data()) || null },
  };
};
