import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./HomeList.scss";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

export default function HomeList() {
  const cursorRef = useRef(null);
  const wrapper = useRef(null);
  const [xPos, setXPos] = useState(null);
  const [yPos, setYPos] = useState(null);
  const [cursorImage, setCursorImage] = useState(null);
  const list = useRef(null);

  useGSAP(
    () => {
      if (cursorImage) {
        gsap.set(cursorRef.current, {
          x: xPos,
          y: yPos - wrapper.current.clientHeight,
          xPercent: -50,
          yPercent: 50,
        });
      }
    },
    { dependencies: [xPos, yPos, cursorImage], scope: wrapper }
  );

  function handleMouseMove(event) {
    setXPos(event.clientX);
    setYPos(event.clientY);
  }

  function handleListItemHover(imagePath) {
    setCursorImage(imagePath);
  }
  function removeImage() {
    setCursorImage(null);
  }

  return (
    <div
      className="homeList__wrapper"
      ref={wrapper}
      onMouseMove={handleMouseMove}
    >
      <ul ref={list}>
        <li
          onMouseEnter={() => handleListItemHover("/2.jpg")}
          onMouseLeave={removeImage}
        >
          <Link to="/portfolio/dream_architect">
            <h2>DREAM ARCHITECT</h2>
          </Link>
        </li>
        <li
          onMouseEnter={() => handleListItemHover("/3.jpg")}
          onMouseLeave={removeImage}
        >
          <h2>MIRAGE</h2>
        </li>
        <li
          onMouseEnter={() => handleListItemHover("/4.jpg")}
          onMouseLeave={removeImage}
        >
          <h2>CLARA FROM JAPAN</h2>
        </li>
      </ul>
      <div className="cursor">
        {cursorImage && (
          <img
            ref={cursorRef}
            className="cursor"
            src={cursorImage}
            alt="Custom Cursor"
          />
        )}
      </div>
    </div>
  );
}
