import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero-container">
      <motion.div
        className="hero-content-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}>
        <p className="newProductTitle">new product</p>
        <h1 className="homeProductTitle">xx99 mark ii headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button>
          <Link href="/product/xx99-mark-two-headphones">
            <a>See Products</a>
          </Link>
        </button>
      </motion.div>

    </div>
  );
};

export default Hero;
