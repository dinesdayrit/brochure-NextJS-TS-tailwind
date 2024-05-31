import Image from "next/image"
import op1 from "@/assets/images/op1.png"
import op2 from "@/assets/images/op2.png"
import op3 from "@/assets/images/op3.png"
import op4 from "@/assets/images/op4.png"

const OtherProducts = () => {
  return (
    <div className="mt-16 flex flex-col items-center mb-18" id="otherProducts">
      <h1 className="font-bold text-5xl mb-6">Other Products</h1>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 lg:gap-8 p-8">
        <div className="flex flex-col items-center">
        <Image src={op1} width={260} height={300} alt="Product 1" priority/>
        <label className="mt-8 lg:text-2xl font-bold text-center font-serif text-blue-500">Household and Cleaning Ingredients</label>
        </div>

        <div className="flex flex-col items-center">
        <Image src={op2} width={260} height={320} alt="Product 2" priority/>
        <label className="mt-8 lg:text-2xl font-bold text-center font-serif text-blue-500">Personal Care and Cosmetics</label>
        </div>
        
        <div className="flex flex-col items-center">
        <Image src={op3} width={260} height={300} alt="Product 3" priority/>
        <label className="mt-8 lg:text-2xl font-bold text-center font-serif text-blue-500">Aromatic and Oils</label>
        </div>

        <div className="flex flex-col items-center">
        <Image src={op4} width={260} height={300} alt="Product 4" priority/>
        <label className="mt-8 lg:text-2xl font-bold text-center font-serif text-blue-500">Industrial Chemicals and Raw Materials</label>
        </div>

      </div>
    </div>
  )
}

export default OtherProducts
