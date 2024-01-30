import { useRef } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Test from "./components/Sections/Test";
import HomeList from "./components/HomeList/HomeList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import PageTransition from "./components/PageTransition";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Utiliser playTransition avant de naviguer vers une nouvelle page
    window.playTransition();
  }, []);

  return (
    <>
      <Navbar />
      <PageTransition />
      <AnimatePresence mode="wait">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio/:id" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </AnimatePresence>
    </>
  );
}

export default App;
