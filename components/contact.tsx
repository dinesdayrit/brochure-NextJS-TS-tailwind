import Image from 'next/image';

const Contact = () => {
  return (
    <div className="relative bottom-0">
      <div className="relative h-[30rem]">
        <Image
          src="/mfooter.png"
          layout="fill"
          alt="Footer"
        />
      </div>
      <div className="absolute flex flex-col justify-center bottom-16 text-white py-4 px-6">
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

        <div className="mt-4 flex gap-2"> <img src='loc.svg' width={20}/><p>84 Malakas St. Brgy. Pinyahan Quezon City</p> </div>
        <div className="mt-4 flex gap-2"> <img src='email.svg' width={20}/><p> armand@bradwell.ph</p> </div>
        <div className="mt-4 flex gap-2"> <img src='phone.svg' width={20}/><p> 639 932 1944420</p> </div>

      </div>
      <div className="absolute flex justify-center items-center w-full bottom-0 text-white py-4 px-6 gap-4">
        <img src='fb.svg' width={35}/>
        <img src='ig.svg' width={35}/>
      </div>
    </div>
  );
}

export default Contact;
