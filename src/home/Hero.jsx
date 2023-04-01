import React from "react";
import TextRandomize from "../components/TextRandomize";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className=" h-screen -mt-20 text-white container flex justify-center items-center"
    >
      <motion.div
        style={{ scale, position }}
        className="flex flex-col items-center"
      >
        <div className="text-white font-normal text-center">
          <h3 className="text-2xl">Hi, welcome to</h3>

          <span className="text-4xl font-cousine font-bold">
            <TextRandomize text="Decentralized Brains" />
          </span>
          <h3 className="text-gray-300 pt-10 text-2xl">
            Want to adopt Blockchain? You're in the right place!
          </h3>
          <p className="text-white pt-5 max-w-lg">
            Interested in using blockchain in your business? We provide
            customized blockchain services to help organizations and startups
            quickly integrate and deploy blockchain technology
          </p>
          <p className=" text-yellow-500 ">
            Let's create something amazing together...
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
