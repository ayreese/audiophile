import { ShowcaseStyle } from "../styles/ShowcaseStyle";
import { Button } from "../styles/Button.style";
import Link from "next/link";
type Props = {};

const Showcase = (props: Props) => {
  return (
    <ShowcaseStyle>
      <div className="showcase-section-1">
        <div className="showcase-img">
          <img src="/showcase-1.png" alt="" />
        </div>
        <div className="showcase-img-tablet">
          <img src="/showcase-1-tablet.png" alt="" />
        </div>
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
          <Link href="/product/speakers/9emGPitXUYVHTtrDoxhV">
            <a>See Products</a>
          </Link>
        </div>
      </div>
      <div className="showcase-section-2">
        <div className="description">
          <h4>ZX7 SPEAKER</h4>
          <Link href="/product/speakers/rcRLj7bkmyZeLnTWpcv8">
            <a>See Products</a>
          </Link>
        </div>
        <div className="showcase-img"></div>
      </div>
      <div className="showcase-section-3">
        <div className="description">
          <h4>yx1 headphones</h4>
          <Link href="/product/earphones/gDn3CJZbwZTnbttY4Yds">
            <a>See Products</a>
          </Link>
        </div>
        <div className="showcase-img"></div>
      </div>
    </ShowcaseStyle>
  );
};

export default Showcase;
