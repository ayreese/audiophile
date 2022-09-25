import React from "react";
import { GetStaticPaths, NextPage } from "next";
import { Button } from "../../styles/Button.style";
import {
  ProductDescription,
  ProductStyle,
} from "../../styles/ProductPage.style";
import Link from "next/link";
import Info from "../../components/pageComponents/Info";
import ProductType from "../../components/pageComponents/ProductType";
import data from "../../data.json";
import Head from "next/head";

const Details: NextPage<{ product: string }> = ({ product }) => {
  const newLocal = "viewport";
  const elements = JSON.parse(product);
  const products = elements.items;

  return (
    <>
      <Head>
        <meta name={newLocal} content="width=device-width, initial-scale=1.0" />
        <title>{elements.pageName.toUpperCase()}</title>
      </Head>
      <ProductStyle>
        <div className="page-title">
          <h1>{elements.pageName}</h1>
        </div>
      </ProductStyle>
      <ProductDescription>
        {products.map((product: any) => {
          return (
            <div key={product.id} className="product-wrapper">
              <div className="left">
                <img src={product.image.desktop} alt="" />
              </div>
              <div className="right">
                {product.new && <p>new product</p>}
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <Link href={`/product/${product.slug}`} replace>
                  <Button primary={true}>
                    <a>see product</a>
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </ProductDescription>
      <ProductType prop={false} />
      <Info prop={false} />
    </>
  );
};

export default Details;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map((product: any) => {
    return {
      params: { category: product.category },
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
  params: { category: string };
}) => {
  const items = data.filter((item) => item.category === params?.category);
  const newItem = { pageName: params.category, items };

  return {
    props: { product: JSON.stringify(newItem) || null },
  };
};
