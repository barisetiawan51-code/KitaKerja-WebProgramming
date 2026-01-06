import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductSection from "./components/home/product";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductSection />
    </main>
  );
}
