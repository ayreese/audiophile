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
import Cart from "./Cart";
import cart from "../public/cart.png";
type Props = {};

const Navigation = (props: Props) => {
  const [active, setActive] = useState(false);
  const menuToggle = () => {
    setActive(!active);
  };

  const [open, setOpen] = useState<boolean>(false);
  const openCart = () => {
    setOpen(!open);
  };
  return (
    <Nav>
      {open ? <Cart /> : null}

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
        <button onClick={openCart}>
          <img src="/cart.png" alt="" />
        </button>
      </div>
    </Nav>
  );
};

export default Navigation;
