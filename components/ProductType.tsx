import Image from "next/image";
import Link from "next/link";
import { Type } from "../styles/ProductTypeStyle";
import headphonesShop from "../public/headphones-shop.png";
import speakersShop from "../public/speaker-shop.png";
import earphonesShop from "../public/earphone-shop.png";

import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

type Props = {};

const ProductType = (props: Props) => {
  return (
    <Type>
      <div className="product-type">
        <Image
          src={headphonesShop}
          alt="headphones"
          layout="intrinsic"
          objectFit="contain"
          objectPosition="center"
        />

        <div className="description-bg"></div>
        <div className="product-description">
          <p>Headphones</p>
          <Link href="/headphones">
            <a>
              shop <span>{">"}</span>
            </a>
          </Link>
        </div>
      </div>
      <div className="product-type">
        <Image
          src={speakersShop}
          alt="headphones"
          layout="intrinsic"
          objectFit="contain"
          objectPosition="center"
        />
        <div className="description-bg"></div>
        <div className="product-description">
          <p>Speakers</p>
          <Link href="/speakers">
            <a>
              shop <span>{">"}</span>
            </a>
          </Link>
        </div>
      </div>
      <div className="product-type">
        <div className="img-wrapper">
          <Image
            src={earphonesShop}
            alt="headphones"
            layout="intrinsic"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className="description-bg"></div>
        <div className="product-description">
          <p>Headphones</p>
          <Link href="/earphones">
            <a>
              shop <span>{">"}</span>
            </a>
          </Link>
        </div>
      </div>
    </Type>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:1337/api/products");
  const data = await res.json;
  console.log(data);

  return {
    props: { data },
  };
};

export default ProductType;
