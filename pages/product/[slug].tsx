import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import { Product } from "../../components/interface/interfaces";
import {
  Features,
  ProductInfoStyle,
  ProductPhotos,
} from "../../styles/ProductInfoStyle";
import Info from "../../components/pageComponents/Info";
import { Button } from "../../styles/Button.style";
import { useCart } from "../../context/CartContext";
import ProductType from "../../components/pageComponents/ProductType";
import Recommendations from "../../components/pageComponents/Recommendations";
import data from "../../data.json";
import Head from "next/head";
import Image from "next/image";

const Details: NextPage<{ product: string }> = ({ product }) => {
  const newLocal = "viewport";
  const { addItem } = useCart();
  const item: Product = JSON.parse(product);
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
      <Head>
        <meta name={newLocal} content="width=device-width, initial-scale=1.0" />
        <title>{item.name}</title>
      </Head>
      <ProductInfoStyle>
        <div className="product-wrapper">
          <div className="left">
            <Image
              src={item.categoryImage.desktop}
              objectFit="contain"
              layout="responsive"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className="right">
            {item.new && <p>new product</p>}
            <h2>{item.name}</h2>
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
          <p>{item.features}</p>
        </div>
        <div className="box-features">
          <h3>in the box</h3>
          <div className="box-content">
            {item.includes.map((items) => {
              return (
                <div key={item.id} className="content">
                  <p className="count">{items.quantity}x</p>
                  <p className="item">{items.item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Features>
      <ProductPhotos>
        <div className="left">
          <img src={item.gallery.first.desktop} alt="" />
          <img src={item.gallery.second.desktop} alt="" />
        </div>
        <div className="right">
          <img src={item.gallery.third.desktop} alt="" />
        </div>
      </ProductPhotos>
      <Recommendations {...item} />
      <ProductType prop={false} />
      <Info prop={false} />
    </>
  );
};

export default Details;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map((product: any) => {
    return {
      params: { slug: product.slug },
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
  params: { slug: string };
}) => {
  const item = data.find((element) => element.slug === params?.slug);

  return {
    props: { product: JSON.stringify(item) || null },
  };
};
