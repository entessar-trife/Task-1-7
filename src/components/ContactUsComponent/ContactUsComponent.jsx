import "./ContactUsComponent.css"
import ctaThumb1_1 from "./../../assets/images/Home/ctaThumb1_1.webp"
import ctaShape1_1 from "./../../assets/images/ctaShape1_1.webp"
import { FaArrowRightLong } from "react-icons/fa6"
import { FaArrowLeftLong } from "react-icons/fa6"
import MainBtn from "../MainBtn/MainBtn"

export default function ContactUsComponent() {
  return (
    <>
      <div className="contact_us container">
        <img src={ctaThumb1_1} className="ctaThumb1_1" />
        <div className="contact_us_text">
          <span className="text-uppercase fw-semibold d-flex  align-items-center">
            <FaArrowLeftLong className="me-2" />
            Contact Us
            <FaArrowRightLong className="ms-2" />
          </span>
          <span className="expert_hosting"> 24/7 Expert Hosting Support Our Customers Love </span>
        </div>
        <MainBtn
          title="Talk to a specialist"
          Class={"contact_btn"}
        />
        <img src={ctaShape1_1} className="ctaShape1_1" />
      </div>
    </>
  )
}
