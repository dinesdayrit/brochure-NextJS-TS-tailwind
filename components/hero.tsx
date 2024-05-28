import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-screen lg:h-[40rem] h-screen mb-10">
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
