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
        <p className="text-lg">Have questions or concerns? Reach out to us!</p>
        <p className="mt-4">Location: 84 Malakas St. Brgy. Pinyahan Quezon City</p>
        <p>Email: armand@bradwell.ph</p>
        <p>Phone: 639 932 1944420</p>
      </div>
      <div className="absolute flex justify-center items-center w-full bottom-0 text-white py-4 px-6 gap-4">
        <p>facebook</p>
        <p>Instagram</p>
      </div>
    </div>
  );
}

export default Contact;
