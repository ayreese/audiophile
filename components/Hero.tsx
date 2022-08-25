import Image from "next/image";
import Link from "next/link";
import { HeroStyle } from "../styles/Hero.style";
import React from "react";
import headphones from "../public/headphones-hero.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <HeroStyle>
      <div className="left">
        <p>new product</p>
        <h1>xx99 mark ii headphones</h1>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
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
    </HeroStyle>
  );
};

export default Hero;
