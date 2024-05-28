import Image from "next/image";

const Products = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className="font-bold text-5xl mb-6">Our Products</h1>
      <div className="grid grid-cols-2 gap-4">
        <Image src="/p1.png" width={500} height={500} alt="Product 1" />
        <Image src="/p2.png" width={500} height={500} alt="Product 2" />
        <Image src="/p3.png" width={500} height={500} alt="Product 3" />
        <Image src="/p4.png" width={500} height={500} alt="Product 4" />
        <Image src="/p5.png" width={500} height={500} alt="Product 5" />
        <Image src="/p6.png" width={500} height={500} alt="Product 6" />
      </div>
    </div>
  );
}

export default Products;
