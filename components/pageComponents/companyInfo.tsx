import { motion } from "framer-motion";
import { Prop } from "../interface/interfaces";
const Info = ({ prop }: Prop) => {
  return (
    <div className="company-info-container">
      {prop ? (
        <>
          <motion.div
            className="left"
            initial={{ opacity: 0, y: 1000 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}>
            <h2 className="sectionTitle">
              Bringing you the <br />
              <span>best</span> audio gear
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </motion.div>
          <motion.div
            className="right"
            initial={{ opacity: 0, y: 1000 }}
            animate={{ y: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}>
            <picture>
              <source
                media="(max-width: 780px)"
                srcSet="/info-image-tablet.png"
              />
              <img src="/info-image.png" alt="" />
            </picture>
          </motion.div>
        </>
      ) : (
        <>
          <article className="left">
            <h2 className="sectionTitle">
              Bringing you the <br />
              <span>best</span> audio gear
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </article>
          <div className="right">
            <picture>
              <source
                media="(max-width: 780px)"
                srcSet="/info-image-tablet.png"
              />
              <img src="/info-image.png" alt="" />
            </picture>
          </div>
        </>
      )}
    </div>
  );
};

export default Info;
