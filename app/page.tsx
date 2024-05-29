import NavMenu from "@/components/NavMenu";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import OtherProducts from "@/components/otherProducts";
import Products from "@/components/products";


export default function Home() {
  return (
    <main>
      <NavMenu />
      <Hero />
      <Products />
      <OtherProducts />
      <Contact />
    </main>
  );
}
