import React, { useState } from "react";
import { Nav } from "../styles/Navigation.style";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faClose,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
type Props = {};

const Navigation = (props: Props) => {
  const [active, setActive] = useState(false);
  const menuToggle = () => {
    setActive(!active);
  };
  return (
    <Nav>
      <div className="menu-buttons">
        <button className="menu" onClick={menuToggle}>
          <FontAwesomeIcon icon={active ? faClose : faBars} className="menu" />
        </button>
      </div>

      <div className="logo">
        <Link href="/">
          <a>
            <img src="/audiophile 2.png" alt="" />
          </a>
        </Link>
      </div>
      <nav className={active ? "open" : "close"}>
        <ul>
          <li>
            <a href="/"> home</a>
          </li>
          <li>
            <a href="/headphones"> headphones</a>
          </li>
          <li>
            <a href="/speakers"> speakers</a>
          </li>
          <li>
            <a href="/earphones"> earphones</a>
          </li>
        </ul>
      </nav>

      <div className="cart">
        <button>
          <img src="/cart.png" alt="" />
        </button>
      </div>
    </Nav>
  );
};

export default Navigation;
