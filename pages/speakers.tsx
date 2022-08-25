import { GetStaticPaths, NextPage } from "next";
import { Button } from "../styles/Button.style";
import { ProductDescription, ProductStyle } from "../styles/ProductPage.style";
import Link from "next/link";
import Info from "../components/Info";
import ProductType from "../components/ProductType";
import { db } from "../clientApp";

import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const Product: NextPage = ({ products }: any) => {
  console.log(products);
  return (
    <>
      <ProductStyle>
        <div className="page-title">
          <h1>speakers</h1>
        </div>
      </ProductStyle>
      <ProductDescription>
        {products.map((product: any) => {
          console.log(product);
          return (
            <div className="product-wrapper">
              <div className="left">
                <img src={product.img} alt="" />
              </div>
              <div className="right">
                <p>new product</p>
                <h2>{product.name} speaker</h2>
                <p>{product.description}</p>
                <Button primary={true}>
                  <Link href={`product/speakers/${product.id}`}>
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
  const collectRef = collection(db, "speakers");
  const data = await getDocs(collectRef).then((snapshot) => {
    let products: any[] = [];
    snapshot.docs.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
    });
    console.log(products);
    return products;
  });

  return {
    props: { products: data },
  };
};
