import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import FeaturedProducts from "./FeaturedProducts";
import PromoBanner from "./PromoBanner";
import PopularProduts from "./PopularProduts";
import PopularBrands from "./PopularBrands";
import FAQSection from "./FAQSection";
import CustomerReviews from "./CustomerReviews";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <PromoBanner />
      <PopularProduts />
      <PopularBrands />
      <FAQSection />
      <CustomerReviews />
    </div>
  );
}
