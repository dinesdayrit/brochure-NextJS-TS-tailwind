import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative sm:h-[35rem] h-screen">
      <Image
        src="/hero.png"
        layout="fill"
        className="lg:rounded-br-full"
        alt="Hero image"
      />
    </div>
  );
}

export default Hero;
