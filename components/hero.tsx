import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="relative h-screen" id="home">
            <div className="absolute inset-0 flex justify-center items-center h-full">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      {/* mobile screen and tablet */}
      <div className="lg:hidden">
      <Image
        src="/hero.png"
        layout="fill"
        alt="Hero image"
      />
      </div>

      {/* bigger screen */}
      <div className="hidden lg:block">      
       <Image
         src="/hero2.jpg"
         layout="fill"
         objectFit="cover"
         alt="Hero image1"
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
