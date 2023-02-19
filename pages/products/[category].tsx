import React from "react";
import { GetStaticPaths, NextPage } from "next";
import Link from "next/link";
import Info from "../../components/pageComponents/CompanyInfo";
import ProductType from "../../components/pageComponents/CategoryCards";
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
      <div className="category-container">
        <div className="page-title">
          <h1 className="homeProductTitle">{elements.pageName}</h1>
        </div>
      </div>
      <div className="description-container">
        {products.map((product: any) => {
          return (
            <div key={product.id} className="product-wrapper">
              <div className="left">
                <img src={product.image.desktop} alt="" />
              </div>
              <div className="right">
                {product.new && <p className="newProductTitle">new product</p>}
                <h2 className="sectionTitle">{product.name}</h2>
                <p>{product.description}</p>
                <Link href={`/product/${product.slug}`} replace>
                  <button >
                    <a>see product</a>
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
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
