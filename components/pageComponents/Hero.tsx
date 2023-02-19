import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../styles/Button.style";

const Hero = () => {
  return (
    <div className="hero-container">
      <motion.div
        className="left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}>
        <p className="newProductTitle">new product</p>
        <h1 className="homeProductTitle">xx99 mark ii headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button
          primary={true}
          as={motion.button}
          whileHover={{ backgroundColor: "#fbaf85", cursor: "pointer" }}>
          <Link href="/product/xx99-mark-two-headphones">
            <a>See Products</a>
          </Link>
        </Button>
      </motion.div>
      <motion.div
        className="right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}>
        <Image
          src="/headphones-hero.png"
          alt="product-image headphones"
          width="710"
          height="729"
          layout="responsive"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
