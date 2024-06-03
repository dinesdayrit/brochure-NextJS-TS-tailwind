"use client";

import Image from "next/image";
import HeroImg from "@/assets/images/hero2.jpg";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import HeroLogo from "@/assets/icons/logo.png";

const Hero = () => {
  return (
    <div className="relative h-screen" id="home">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="h-screen"
        >
          <Image
            src={HeroImg}
            alt="Hero image"
            className="h-screen w-screen object-cover"
            priority
          />
          <div className="absolute inset-0 max-w-full mx-auto p-4 flex flex-col items-center justify-between bg-black bg-opacity-50">

            <div className="flex-grow flex flex-col items-center justify-center mt-32">
              <h1 className="text-3xl md:text-7xl bg-clip-text text-white text-center font-sans font-bold">
                Ingredients for Meat Processing?
              </h1>
              <p className="text-gray-200 max-w-6xl mx-auto my-2 text-sm md:text-lg text-center">
                Looking for top-notch raw materials for meat processing, tantalizing beverages, exquisite flavors,
                and cutting-edge nutraceuticals? Look no further! At Bradwell,
                your business. Whether you&apos;re sending order confirmations, we specialize in providing premium ingredients to take your products to the next level.
              </p>
              <button className="bg-orange-600 rounded-full text-white font-bold py-4 px-16 mx-auto w-auto">
                Call Us Now!
              </button>
            </div>
            <div className="flex-shrink-0">
              <Image
                src={HeroLogo}
                alt=""
                className="h-[15rem] w-[15rem]"
                priority
              />
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}

export default Hero;
