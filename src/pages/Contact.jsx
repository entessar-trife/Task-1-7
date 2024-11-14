import SecondHero from "../components/SecondHero/SecondHero"
import SecondNavBar from "../components/SecondNavBar/SecondNavBar"
import ContactInfoComponent from "../components/ContactInfoComponent/ContactInfoComponent"
import ContactSection from "../components/ContactSection/ContactSection"
import Footer from "../components/footer/footer"

export default function Contact() {
  return (
    <>
      <SecondNavBar />
      <SecondHero title="Contact Us" />
      <ContactSection />
      <ContactInfoComponent
        x={true}
        address="Address"
        address_desc="4648 Rocky Road Philadelphia"
        email="Send Email"
        email_desc="info@example.com"
        number_desc="Call Emergency"
        number="+88 123 654 99"
      />
      <Footer />
    </>
  )
}
