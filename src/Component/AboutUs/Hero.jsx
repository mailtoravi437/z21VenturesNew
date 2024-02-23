import React from "react";
import AboutUsHero from "./images/AboutUsHero.svg";
import { motion } from "framer-motion";
import { textVariants } from "../../FramerAnimation/Framer";

export default function Hero() {
  const fontStyles = {
    fontFamily: "Kalnia, sans-serif",
  };

  return (
    <section
      className="relative h-screen w-screen bg-black bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${AboutUsHero})` }}>
      <div className="container flex items-center justify-center">
        <div className="text-center w-8/12 p-4">
          <motion.p className="text-5xl md:text-7xl font-arimo text-white font-bold"
            initial="hidden"
            whileInView="visible"
            variants={{ ...textVariants }}>
            We believe in
            <br /> purpose, community & capital
          </motion.p>
        </div>
      </div>
    </section>
  );
}
