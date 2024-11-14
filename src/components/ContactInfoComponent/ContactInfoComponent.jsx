import { MdEmail } from "react-icons/md"
import "./ContactInfoComponent.css"
import { FaLocationDot } from "react-icons/fa6"
import { FaPhoneAlt } from "react-icons/fa"
import video from "../../assets/images/Contact/video.webp"
import { IoTriangle } from "react-icons/io5"


export default function ContactInfoComponent({ x, address, address_desc, email, email_desc, number, number_desc }) {
  return (
    <>
      <div className={`contact_section_1 ${x ? "bg_blue" : "com_width"}`}>
        <div className={`contact_info_com container ${x ? "without_image" : "column with_image"}`}>
          <div className="d-flex align-items-center my-3">
            <a href="#">
              <FaLocationDot className={`contact_icon ${x ? "" : "white_icon"}`} />
            </a>
            <div className="d-flex flex-column">
              <span> {address} </span>
              <a href="#"> {address_desc} </a>
            </div>
          </div>
          <div className={`d-flex align-items-center my-3 position-relative ${x ? "border_1" : "border_2"}`}>
            <a href="#">
              <MdEmail className={`contact_icon ${x ? "" : "white_icon"}`} />
            </a>
            <div className="d-flex flex-column">
              <span> {email} </span>
              <a href="#"> {email_desc}  </a>
            </div>
          </div>
          <div className="d-flex align-items-center my-3">
            <a href="#">
              <FaPhoneAlt className={`contact_icon ${x ? "" : "white_icon"}`} />
            </a>
            <div className="d-flex flex-column">
              <span> {number_desc} </span>
              <a href="#"> {number} </a>
            </div>
          </div>
        </div>
        {!x &&
          <div className="position-relative">
            <img src={video} className="video_img" />
            <IoTriangle className="video_icon" />
          </div>}
      </div>
    </>
  )
}
