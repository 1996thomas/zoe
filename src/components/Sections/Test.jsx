import React from "react";
import "./test.scss";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Test() {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef();
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      gsap.to(".box", {
        xPercent: -100 * (boxes.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "-=100",
          trigger: container.current,
          pin: true,
          scrub: 1,
          end: "+=5000",
          snap:{
            snapTo: 1/ (boxes.length - 1),
            duration: { min: 0.1, max: 0.1 }, // adjust as needed
            delay: 0.1, // slight delay to let animation finish before snapping
            ease: "power2.inOut", // easing for the snap
          }
        },
      });
    },
    { scope: container }
  );

  return (
      <div className="wrapper">
        <div className="container" ref={container}>
          <div className="box">
            <div className="content__wrapper">
              <img src="/5.jpg" alt="" />
              <div className="content">
                <h3>Poussière d'étoiles</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  nemo, quidem, perferendis officiis, sequi incidunt omnis
                  itaque enim repellendus sit cum? Perferendis amet autem
                  assumenda? Aspernatur adipisci in quos? Eum.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="content__wrapper">
              <img src="/5.jpg" alt="" />
              <div className="content">
                <h3>Poussière d'étoiles</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  nemo, quidem, perferendis officiis, sequi incidunt omnis
                  itaque enim repellendus sit cum? Perferendis amet autem
                  assumenda? Aspernatur adipisci in quos? Eum.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="content__wrapper">
              <img src="/5.jpg" alt="" />
              <div className="content">
                <h3>Poussière d'étoiles</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  nemo, quidem, perferendis officiis, sequi incidunt omnis
                  itaque enim repellendus sit cum? Perferendis amet autem
                  assumenda? Aspernatur adipisci in quos? Eum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
