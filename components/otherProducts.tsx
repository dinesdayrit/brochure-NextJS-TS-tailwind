import Image from "next/image"

const OtherProducts = () => {
  return (
    <div className="mt-16 flex flex-col items-center mb-18" id="otherProducts">
      <h1 className="font-bold text-5xl mb-6">Other Products</h1>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 lg:gap-8 p-8">
        <div className="flex flex-col items-center">
        <Image src="/op1.png" width={260} height={300} alt="Product 1"/>
        <label className="mt-8 lg:text-2xl font-bold text-center font-serif text-blue-500">Household and Cleaning Ingredients</label>
        </div>

        <div className="flex flex-col items-center">
        <Image src="/op2.png" width={260} height={320} alt="Product 2" />
        <label className="mt-8 lg:text-2xl font-bold text-center font-serif text-blue-500">Personal Care and Cosmetics</label>
        </div>
        
        <div className="flex flex-col items-center">
        <Image src="/op3.png" width={260} height={300} alt="Product 3"/>
        <label className="mt-8 lg:text-2xl font-bold text-center font-serif text-blue-500">Aromatic and Oils</label>
        </div>

        <div className="flex flex-col items-center">
        <Image src="/op4.png" width={260} height={300} alt="Product 4"/>
        <label className="mt-8 lg:text-2xl font-bold text-center font-serif text-blue-500">Industrial Chemicals and Raw Materials</label>
        </div>

      </div>
    </div>
  )
}

export default OtherProducts
