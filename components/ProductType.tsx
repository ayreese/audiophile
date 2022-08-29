import Image from "next/image";
import Link from "next/link";
import { Type } from "../styles/ProductTypeStyle";
import headphonesShop from "../public/headphones-shop.png";
import speakersShop from "../public/speaker-shop.png";
import earphonesShop from "../public/earphone-shop.png";

const ProductType = () => {
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
        <Image
          src={earphonesShop}
          alt="headphones"
          layout="intrinsic"
          objectFit="contain"
          objectPosition="center"
        />

        <div className="description-bg"></div>
        <div className="product-description">
          <p>Earphones</p>
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

export default ProductType;
