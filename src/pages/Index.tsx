import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ProductCategories } from "@/components/home/ProductCategories";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <ProductCategories />
      <WhyChooseUs />
    </Layout>
  );
};

export default Index;
