import Head from "next/head";
import type { NextPage } from "next";
import Showcase from "../components/Showcase";
import Info from "../components/Info";
import ProductType from "../components/ProductType";
import Hero from "../components/Hero";

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

      <Hero />
      <ProductType />
      <Showcase />
      <Info />
    </>
  );
};

export default Home;
