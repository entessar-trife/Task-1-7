import HomeNavBar from "../components/HomeNavBar/HomeNavBar"
import HomeHero from "../components/HomeHero/HomeHero"
import Blogs from "../components/Blogs/Blogs"
import ConnectedComponent from "../components/ConnectedComponent/ConnectedComponent"
import ContactUsComponent from "../components/ContactUsComponent/ContactUsComponent"
import Services from "../components/Services/Services"
import Pricing from "../components/Pricing/Pricing"
import Footer from "../components/footer/footer"
import Testimonials from "../components/Testimonials/Testimonials"
import BrandLogo_1 from "../assets/images/Home/brand logo/brandLogo1_1.svg"
import BrandLogo_2 from "../assets/images/Home/brand logo/brandLogo1_2.svg"
import BrandLogo_3 from "../assets/images/Home/brand logo/brandLogo1_3.svg"
import BrandLogo_4 from "../assets/images/Home/brand logo/brandLogo1_4.svg"
import BrandLogo_5 from "../assets/images/Home/brand logo/brandLogo1_5.svg"
import SliderLogos from "../components/SliderLogos/SliderLogos"

export default function Home() {
  return (
    <>
      <HomeNavBar />
      <HomeHero />
      <SliderLogos
        image_1={BrandLogo_1}
        image_2={BrandLogo_2}
        image_3={BrandLogo_3}
        image_4={BrandLogo_4}
        image_5={BrandLogo_5}
        border={true}
      />
      <Services />
      <Pricing />
      <ContactUsComponent />
      <Testimonials />
      <Blogs />
      <ConnectedComponent />
      <Footer />
    </>
  )
}