// import Image from 'next/image';

const Contact = () => {

  const currentYear = new Date().getFullYear();
  return (
  //   <div className="relative bottom-0">
  //     <div className="relative h-[30rem]">
  //       <Image
  //         src="/mfooter.png"
  //         layout="fill"
  //         alt="Footer"
  //       />
  //     </div>
  //     <div className="absolute flex flex-col justify-center lg:items-center w-full bottom-20 lg:bottom-32 text-white py-4 px-6">
  //       <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

  //       <div className="mt-4 flex gap-2"> <img src='loc.svg' width={20}/><p>84 Malakas St. Brgy. Pinyahan Quezon City</p> </div>
  //       <div className="mt-4 flex gap-2"> <img src='email.svg' width={20}/><p> armand@bradwell.ph</p> </div>
  //       <div className="mt-4 flex gap-2"> <img src='phone.svg' width={20}/><p> 639 932 1944420</p> </div>

  //     </div>
  //     <div className="absolute flex justify-center items-center w-full bottom-0 text-white py-4 px-6 gap-4">
  //       <img src='fb.svg' width={35}/>
  //       <img src='ig.svg' width={35}/>
  //     </div>
  //   </div>
  
  <div className="bg-custom-gradient py-12 px-4 sm:px-6 lg:px-8" id="contact">
  <div className="max-w-sm mx-auto">
    <h1 className="text-3xl font-bold text-gray-100 mb-4">Contact Us</h1>
    <div className="bg-sky-600 rounded-lg shadow-lg p-6">
      
      <div className="mt-4 flex gap-2">
      <img src='email.svg' width={20}/>
        <p className="text-gray-100">armand@bradwell.ph</p>
      </div>

      <div className="mt-4 flex gap-2 items-start">
        <img src='loc.svg' width={20}/>
        <p className="text-gray-100">84 Malakas St. Brgy. Pinyahan Quezon City</p>
      </div>

      <div className="mt-4 flex gap-2 items-start mb-8">
      <img src='phone.svg' width={20}/>
        <p className="text-gray-100">639 932 1944420 <br/>
        (+632) 8295-5835 <br />
        639 992 5585302 <br />
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-100 mb-2">Social Media</h2>
        <div className="flex space-x-2">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-gray-300">
          <img src='fb.svg' width={35}/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-gray-300">
          <img src='ig.svg' width={35}/>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium text-orange-500">Subscribe to our Newsletter</h2>
   
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              Subscribe
          </button>
  
      </div>
    </div>
  </div>
  <p className="text-white text-center">&copy; {currentYear} Bradwell. All rights reserved.</p>
</div>
);
}

export default Contact;
