import Image from "next/image";
import Link from "next/link";
import headphonesShop from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersShop from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesShop from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import {motion} from "framer-motion";
import {Prop} from "../interface/interfaces";

const ProductType = ({prop}: Prop) => {
    return (
        <div className="category-card-container">
            {prop ? (
                <>
                    <motion.div
                        className="main"
                        initial={{opacity: 0, y: 1000}}
                        animate={{y: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.2, duration: 1}}
                        viewport={{once: true}}>
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
                                <Link href="/products/headphones">
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
                                <Link href="/products/speakers">
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
                                <Link href="/products/earphones">
                                    <a>
                                        shop <span>{">"}</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </>
            ) : (
                <>
                    <div className="main">
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
                                <Link href="/products/headphones">
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
                                <Link href="/products/speakers">
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
                                <Link href="/products/earphones">
                                    <a>
                                        shop <span>{">"}</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductType;
