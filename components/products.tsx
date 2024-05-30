"use client";

import { useState, MouseEvent } from "react";
import Image from "next/image";

const Products = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeModal = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="mt-16 flex flex-col items-center" id="products">
      <h1 className="font-bold text-5xl">Our Products</h1>
      <p className="lg:hidden">Tap the Product to zoom</p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Image src="/p1.png" width={500} height={500} alt="Product 1" onClick={() => openModal("/p1.png")} />
        <Image src="/p2.png" width={500} height={500} alt="Product 2" onClick={() => openModal("/p2.png")} />
        <Image src="/p3.png" width={500} height={500} alt="Product 3" onClick={() => openModal("/p3.png")} />
        <Image src="/p4.png" width={500} height={500} alt="Product 4" onClick={() => openModal("/p4.png")} />
        <Image src="/p5.png" width={500} height={500} alt="Product 5" onClick={() => openModal("/p5.png")} />
        <Image src="/p6.png" width={500} height={500} alt="Product 6" onClick={() => openModal("/p6.png")} />
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeModal}>
          <div className="relative flex items-center lg:h-1/2 lg:w-1/2 ">
            <Image src={selectedImage} width={1000} height={1000} alt="Selected Product" />
            <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-white text-2xl">&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
