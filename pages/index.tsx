import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { Hero } from "../styles/Hero.style";
import { Type } from "../styles/ProductTypeStyle";
import Showcase from "../components/Showcase";
import headphones from "../public/headphones-hero.png";
import { Button } from "../styles/Button.style";
import Info from "../components/Info";
import ProductType from "../components/ProductType";

const Home: NextPage = () => {
  const newLocal = "viewport";
  return (
    <>
      <Head>
        {/* <meta charset="UTF-8" /> */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name={newLocal} content="width=device-width, initial-scale=1.0" />
        <title>audiophile</title>
      </Head>

      <Hero>
        <div className="left">
          <p>new product</p>
          <h1>xx99 mark ii headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="product-button">
            <Link href="/product/headphones/vlxeUHDAUCjQYegc3BdD">
              <a>See Products</a>
            </Link>
          </button>
        </div>
        <div className="right">
          <Image
            src={headphones}
            alt="product-image headphones"
            layout="responsive"
            sizes="5vh"
            quality={100}
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </Hero>
      <ProductType />
      <Showcase />
      <Info />
    </>
  );
};

export default Home;
