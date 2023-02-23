import Link from "next/link";
import {motion} from "framer-motion";
import {Prop} from "../interface/interfaces";

const Showcase = ({prop}: Prop) => {
    return (
        <section className="showcase-container">
            {prop ? (
                <>
                    <motion.div
                        className="showcase-section-1"
                        initial={{opacity: 0, y: 1000}}
                        animate={{y: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.2, duration: 1}}
                        viewport={{once: true}}>
                        <div className="description-wrapper">
                            <h1 className="homeProductTitle">
                                ZX9 <br/>
                                SPEAKER
                            </h1>
                            <p>
                                Upgrade to premium speakers that are phenomenally built to
                                deliver truly remarkable sound.
                            </p>
                            <Link href="/product/zx9-speaker">
                                <a>See Products</a>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        className="showcase-section-2"
                        initial={{opacity: 0, y: 1000}}
                        animate={{y: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.2, duration: 1}}
                        viewport={{once: true}}>
                        <div className="description">
                            <h3>ZX7 SPEAKER</h3>
                            <Link href="/product/zx7-speaker">
                                <a>See Products</a>
                            </Link>
                        </div>
                        <div className="showcase-img"></div>
                    </motion.div>
                    <motion.div
                        className="showcase-section-3"
                        initial={{opacity: 0, y: 1000}}
                        animate={{y: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.2, duration: 1}}
                        viewport={{once: true}}>
                        <div className="description">
                            <h3>yx1 earphones</h3>
                            <Link href="/product/yx1-earphones">
                                <a>See Products</a>
                            </Link>
                        </div>
                        <div className="showcase-img">
                        </div>
                    </motion.div>
                </>
            ) : (
                <>
                    <motion.div
                        className="showcase-section-1"
                        initial={{opacity: 0, y: 1000}}
                        animate={{y: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.2, duration: 1}}
                        viewport={{once: true}}>

                        <div className="toCenter">
                            <div className="description">
                                <h1>
                                    ZX9 <br/>
                                    SPEAKER
                                </h1>
                                <p>
                                    Upgrade to premium speakers that are <br/>
                                    phenomenally built to deliver truly remarkable <br/>
                                    sound.
                                </p>
                                <div className="button">
                                    <Link href="/product/speakers/9emGPitXUYVHTtrDoxhV">
                                        <a>See Products</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="showcase-section-2"
                        initial={{opacity: 0, y: 1000}}
                        animate={{y: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.2, duration: 1}}
                        viewport={{once: true}}>
                        <div className="description">
                            <h3>ZX7 SPEAKER</h3>
                            <Link href="/product/speakers/rcRLj7bkmyZeLnTWpcv8">
                                <a>See Products</a>
                            </Link>
                        </div>
                        <div className="showcase-img"></div>
                    </motion.div>
                    <motion.div
                        className="showcase-section-3"
                        initial={{opacity: 0, y: 1000}}
                        animate={{y: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.2, duration: 1}}
                        viewport={{once: true}}>
                        <div className="description">
                            <h3>yx1 headphones</h3>
                            <Link href="/product/earphones/gDn3CJZbwZTnbttY4Yds">
                                <a>See Products</a>
                            </Link>
                        </div>
                        <div className="showcase-img">
,                        </div>
                    </motion.div>
                </>
            )}
        </section>
    );
};

export default Showcase;
