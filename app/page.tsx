import Contact from "@/components/contact";
import Hero from "@/components/hero";
import OtherProducts from "@/components/otherProducts";
import Products from "@/components/products";


export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <OtherProducts />
      <Contact />
    </main>
  );
}
