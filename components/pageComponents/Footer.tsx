import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import logo from "../../public/assets/shared/desktop/logo.svg";
import facebook from "../../public/assets/shared/desktop/icon-facebook.svg"
import instagram from "../../public/assets/shared/desktop/icon-instagram.svg"
import twitter from "../../public/assets/shared/desktop/icon-twitter.svg"


const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="design-section">
                    <div className="design"></div>
                </div>
                <div className="info">
                    <div className="logo-links">
                        <Image
                            src={logo}
                            alt="headphones"
                            layout="intrinsic"
                            objectFit="contain"
                            objectPosition="center"
                        />
                        <ul>
                            <li>
                                <Link href="/">
                                    <motion.a
                                        whileHover={{
                                            color: "#d87d4a",
                                            cursor: "pointer",
                                            scale: 4,
                                        }}>
                                        {" "}
                                        home
                                    </motion.a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/headphones">
                                    <motion.a
                                        whileHover={{color: "#d87d4a", cursor: "pointer"}}>
                                        {" "}
                                        headphones
                                    </motion.a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/speakers">
                                    <motion.a
                                        whileHover={{color: "#d87d4a", cursor: "pointer"}}>
                                        {" "}
                                        speakers
                                    </motion.a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/earphones">
                                    <motion.a
                                        whileHover={{color: "#d87d4a", cursor: "pointer"}}>
                                        {" "}
                                        earphones
                                    </motion.a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="description">
                        <p>
                            Audiophile is an all in one stop to fulfill your audio needs.
                            We&apos;re a small team of music lovers and sound specialists who
                            are devoted to helping you get the most out of personal audio.
                            Come and visit our demo facility - we&apos;re open 7 days a week.
                        </p>
                    </div>
                </div>
                <div className="bottom-footer">
                    <p className="copyright">Copyright 2021. All Rights Reserved</p>
                    <div className="social">
                        <Link href="https://www.facebook.com" passHref={true}>
                            <a>
                                <Image
                                    className="social"
                                    src={facebook}
                                    alt="headphones"
                                    layout="intrinsic"
                                    objectFit="contain"
                                    objectPosition="center"
                                />
                            </a>
                        </Link>
                        <Link href="https://www.twitter.com" passHref={true}>
                            <a>
                                <Image
                                    className="social"
                                    src={twitter}
                                    alt="headphones"
                                    layout="intrinsic"
                                    objectFit="contain"
                                    objectPosition="center"
                                />
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com" passHref={true}>
                            <a>
                                <Image
                                    className="social"
                                    src={instagram}
                                    alt="headphones"
                                    layout="intrinsic"
                                    objectFit="contain"
                                    objectPosition="center"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
