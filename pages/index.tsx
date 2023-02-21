import Head from "next/head";
import type { NextPage } from "next";
import Showcase from "../components/pageComponents/Showcase";
import Info from "../components/pageComponents/companyInfo";
import ProductType from "../components/pageComponents/CategoryCards";
import Hero from "../components/pageComponents/Hero";

const Home: NextPage = () => {
  const newLocal = "viewport";
  return (
    <>
      <Head>
        <meta name={newLocal} content="width=device-width, initial-scale=1.0" />
        <title>Audiophile</title>
      </Head>

      <Hero />
      <ProductType prop={true} />
      <Showcase prop={true} />
      <Info prop={true} />
    </>
  );
};

export default Home;
