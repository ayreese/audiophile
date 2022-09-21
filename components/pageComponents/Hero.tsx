import Image from "next/image";
import Link from "next/link";
import { HeroStyle } from "../../styles/Hero.style";
import React from "react";
import headphones from "../../public/headphones-hero.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <HeroStyle>
      <motion.div
        className="left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}>
        <p>new product</p>
        <h1>xx99 mark ii headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <motion.button
          className="product-button"
          whileHover={{ backgroundColor: "#fbaf85", cursor: "pointer" }}>
          <Link href="/product/headphones/vlxeUHDAUCjQYegc3BdD">
            <a>See Products</a>
          </Link>
        </motion.button>
      </motion.div>
      <motion.div
        className="right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}>
        <img src="/headphones-hero.png" alt="product-image headphones" />
      </motion.div>
    </HeroStyle>
  );
};

export default Hero;
