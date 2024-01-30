import React from "react";
import "./navbar.scss";
import { useRef } from "react";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function Navbar() {
  const nav = useRef(null);
  useGSAP(() => {
    gsap.from(nav.current, {
      yPercent: -100,
      ease: "circ.out",
      duration: 0.5,
      delay: .7,
    }),
      {
        scope: nav,
      };
  });

  return (
    <div className="navbar__wrapper" ref={nav}>
      <div className="navbar">
        <div className="logo">
          <img src="/SVG/logo.svg" width={50} alt="" />
        </div>
        <ul className="navigation">
          <li>
            <Link to="/">portfolio</Link>
          </li>
          <li>
            <Link to="/about">à propos</Link>
          </li>
        </ul>
        <ul className="socials">
          <li>
            <img src="/SVG/instagram.svg" alt="" />
          </li>
          <li>
            <img src="/SVG/etsy.svg" alt="" />
          </li>
          <li>
            <img src="/SVG/mail.svg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
