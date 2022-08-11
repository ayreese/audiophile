import { FooterStyle } from "../styles/Footer.style";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <FooterStyle>
        <div className="design-section">
          <div className="design"></div>
        </div>
        <div className="info">
          <div className="logo-links">
            <img src="/audiophile 2.png" alt="" />
            <ul>
              <li>Home</li>
              <li>HEADPHONES</li>
              <li>SPEAKERS</li>
              <li>EARPHONES</li>
            </ul>
          </div>
          <div className="description">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
        </div>
        <div className="bottom-footer">
          <p className="copyright">Copyright 2021. All Rights Reserved</p>
          <div className="social">
            <a href="#">
              <img src="/facebook.png" alt="" />
            </a>
            <a href="#">
              <img src="/twitter.png" alt="" />
            </a>
            <a href="#">
              <img src="/instagram.png" alt="" />
            </a>
          </div>
        </div>
      </FooterStyle>
    </>
  );
};

export default Footer;
