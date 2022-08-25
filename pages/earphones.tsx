import { GetStaticPaths, NextPage } from "next";
import { Button } from "../styles/Button.style";
import { ProductDescription, ProductStyle } from "../styles/ProductPage.style";
import Link from "next/link";
import Info from "../components/Info";
import ProductType from "../components/ProductType";
import { db } from "../clientApp";

import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const Product: NextPage = ({ products }: any) => {
  return (
    <>
      <ProductStyle>
        <div className="page-title">
          <h1>earphones</h1>
        </div>
      </ProductStyle>
      <ProductDescription>
        {products.map((product: any) => {
          return (
            <div key={product.id} className="product-wrapper">
              <div className="left">
                <img src={product.img} alt="" />
              </div>
              <div className="right">
                <p>new product</p>
                <h2>{product.name} wireless earphones</h2>
                <p>{product.description}</p>
                <Button primary={true}>
                  <Link href={`product/earphones/${product.id}`}>
                    <a>see product</a>
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
      </ProductDescription>
      <ProductType />
      <Info />
    </>
  );
};

export default Product;

export const getStaticProps = async () => {
  const collectRef = collection(db, "earphones");
  const data = await getDocs(collectRef).then((snapshot) => {
    let products: any[] = [];
    snapshot.docs.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });
    return products;
  });

  return {
    props: { products: data },
  };
};
