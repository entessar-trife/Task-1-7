import SecondHero from "../components/SecondHero/SecondHero"
import SecondNavBar from "../components/SecondNavBar/SecondNavBar"
import TeamMembers from "../components/TeamMembers/TeamMembers"
import star from "../assets/images/About/asterisk.svg"
import SliderLogos from "../components/SliderLogos/SliderLogos"
import Footer from "../components/footer/footer"
import ContactInfoComponent from "../components/ContactInfoComponent/ContactInfoComponent"

export default function About() {
  return (
    <>
      <SecondNavBar />
      <SecondHero
        title="About"
      />
      <SliderLogos
        image_1={star}
        image_2={star}
        image_3={star}
        image_4={star}
        text_1="Cyber Security"
        text_2="IT Solution"
        text_3="Technology"
        text_4="Data Security"
        text={true}
      />
      <TeamMembers />
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
