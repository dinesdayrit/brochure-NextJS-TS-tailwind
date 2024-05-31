import Image from "next/image";
import MHeroImg from "@/public/hero.png"
import HeroImg from "@/public/hero2.jpg"

const Hero = () => {
  return (
    <div className="relative h-screen" id="home">
      {/* mobile screen and tablet */}
      <div className="md:hidden">
      <Image
        src={MHeroImg}
        alt="Hero image"
        className="h-screen w-screen"
        priority
      />
      </div>

      {/* bigger screen */}
      <div className="hidden md:block lg:block">      
       <Image
         src={HeroImg}
         alt="Hero image1"
         className="absolute h-screen w-screen"
         priority
       />
       <div className="absolute h-full w-full bg-white bg-opacity-40">
        <div className="flex flex-col justify-end items-end h-1/2 w-1/2">
        <h1 className="text-blue-500 font-bold text-8xl">Bradwell</h1>
       <p className="text-orange-500 font-bold text-2xl">SALES & MARKETING CORP</p>
       <p className="text-black font-bold text-l">PASSION FOR INNOVATION</p>
        </div>
       </div>
       </div>
    </div>
  );
}

export default Hero;
