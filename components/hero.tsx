import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen">
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
        <h1 className="text-sky-500 font-bold text-8xl">Bradwell</h1>
       <p className="text-orange-500 font-bold text-2xl">SALES & MARKETING CORP</p>
       <p className="text-black font-bold text-l">PASSION FOR INNOVATION</p>
        </div>
       </div>
       </div>
    </div>
  );
}

export default Hero;
