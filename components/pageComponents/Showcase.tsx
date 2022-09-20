import { ShowcaseStyle } from "../../styles/ShowcaseStyle";
import Link from "next/link";
import { motion } from "framer-motion";
import { Prop } from "../interface/interfaces";

const Showcase = ({ prop }: Prop) => {
  return (
    <ShowcaseStyle>
      {prop ? (
        <>
          <motion.div
            className="showcase-section-1"
            initial={{ opacity: 0, y: 1000 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}>
            <div className="showcase-img">
              <img src="/showcase-1.png" alt="" />
            </div>
            <div className="showcase-img-tablet">
              <img src="/showcase-1-tablet.png" alt="" />
            </div>
            <div className="toCenter">
              <div className="description">
                <h1>
                  ZX9 <br />
                  SPEAKER
                </h1>
                <p>
                  Upgrade to premium speakers that are <br />
                  phenomenally built to deliver truly remarkable <br />
                  sound.
                </p>
                <div className="button">
                  <Link href="/product/zx9-speaker">
                    <a>See Products</a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="showcase-section-2"
            initial={{ opacity: 0, y: 1000 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}>
            <div className="description">
              <h4>ZX7 SPEAKER</h4>
              <Link href="/product/zx7-speaker">
                <a>See Products</a>
              </Link>
            </div>
            <div className="showcase-img"></div>
          </motion.div>
          <motion.div
            className="showcase-section-3"
            initial={{ opacity: 0, y: 1000 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}>
            <div className="description">
              <h4>yx1 earphones</h4>
              <Link href="/product/yx1-earphones">
                <a>See Products</a>
              </Link>
            </div>
            <div className="showcase-img">
              <img src="/showcase-earphones.png" alt="" />
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            className="showcase-section-1"
            initial={{ opacity: 0, y: 1000 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}>
            <div className="showcase-img">
              <img src="/showcase-1.png" alt="" />
            </div>
            <div className="showcase-img-tablet">
              <img src="/showcase-1-tablet.png" alt="" />
            </div>
            <div className="toCenter">
              <div className="description">
                <h1>
                  ZX9 <br />
                  SPEAKER
                </h1>
                <p>
                  Upgrade to premium speakers that are <br />
                  phenomenally built to deliver truly remarkable <br />
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
            initial={{ opacity: 0, y: 1000 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}>
            <div className="description">
              <h4>ZX7 SPEAKER</h4>
              <Link href="/product/speakers/rcRLj7bkmyZeLnTWpcv8">
                <a>See Products</a>
              </Link>
            </div>
            <div className="showcase-img"></div>
          </motion.div>
          <motion.div
            className="showcase-section-3"
            initial={{ opacity: 0, y: 1000 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}>
            <div className="description">
              <h4>yx1 headphones</h4>
              <Link href="/product/earphones/gDn3CJZbwZTnbttY4Yds">
                <a>See Products</a>
              </Link>
            </div>
            <div className="showcase-img">
              <img src="/showcase-earphones.png" alt="" />
            </div>
          </motion.div>
        </>
      )}
    </ShowcaseStyle>
  );
};

export default Showcase;
