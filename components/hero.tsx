"use client";

import Image from "next/image";
import HeroImg from "@/assets/images/hero2.jpg";
import HeroLogo from "@/assets/icons/logo.png";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

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
            alt="Hero image1"
            className="h-screen w-screen object-cover opacity-55"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center md:justify-start">
            <Image
              src={HeroLogo}
              alt="bradwell logo"
              className="h-[25rem]"
              priority
            />
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}

export default Hero;
