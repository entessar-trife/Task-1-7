import ContactInfoComponent from "../ContactInfoComponent/ContactInfoComponent"
import GetStartedComponent from "../GetStartedComponent/GetStartedComponent"
import "./ContactSection.css"

export default function ContactSection() {
  return (
    <>
      <div className="contact_section_2 container">
        <ContactInfoComponent
          x={false}
          number_desc="Call Us 7/24"
          number="+208-555-0112"
          email="Make a Quote"
          email_desc="Infotech@example.com"
          address="Location"
          address_desc="4517 Washingtone ave"
        />
        <GetStartedComponent />
      </div>
      <iframe
        className="w-100"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26030.584556800142!2d35.95018426771349!3d35.360037001617144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1523fe3a68bf33eb%3A0xe07c09df6304fdfe!2z2KzYqNmE2KnYjCDYs9mI2LHZitin!5e0!3m2!1sar!2sus!4v1731229960934!5m2!1sar!2sus"
        height="450"
        loading="lazy">
      </iframe>
    </>
  )
}
