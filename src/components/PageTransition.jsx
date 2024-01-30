// PageTransition.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PageTransition = () => {
  const transitionRef = useRef(null);

  useEffect(() => {
    const transitionElement = transitionRef.current;

    const timeline = gsap.timeline({ paused: false });

    timeline
      .set(transitionElement, { opacity: 0 }) // Initialise l'opacité à 0
      .to(transitionElement, { opacity: 1, duration: .5 })
      .to(transitionElement, { opacity: 0 });

    const cleanup = () => {
      timeline.kill();
    };

    // Expose la méthode playTransition pour déclencher l'animation
    window.playTransition = () => timeline.play();

    return cleanup;
  }, []);

  return <div ref={transitionRef} className="page-transition" />;
};

export default PageTransition;
