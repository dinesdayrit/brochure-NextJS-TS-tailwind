import Image from "next/image";
// import MHeroImg from "@/assets/images/hero2.jpg"
import HeroImg from "@/assets/images/hero2.jpg";
import HeroLogo from "@/assets/icons/logo.png";

const Hero = () => {
  return (
    <div className="relative h-screen" id="home">
      {/* mobile screen and tablet */}
      {/* <div className="md:hidden">
      <Image
        src={MHeroImg}
        alt="Hero image"
        className="h-screen w-screen"
        priority
      />
      </div> */}

      {/* bigger screen */}
      <div>      
       <Image
         src={HeroImg}
         alt="Hero image1"
         className="absolute h-screen w-screen"
         priority
       />
       <div className="absolute h-full w-full bg-white bg-opacity-60">
        <div className="flex flex-col justify-center items-center h-full md:w-1/2">
          <Image src={HeroLogo} alt="bradwell logo" className="h-[25rem]" priority/>
        </div>
       </div>
       </div>
    </div>
  );
}

export default Hero;
