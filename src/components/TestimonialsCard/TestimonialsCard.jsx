import "./TestimonialsCard.css"
import { FaStar } from "react-icons/fa6"
import { FaRegStar } from "react-icons/fa"
import testimonialShape3_1 from "../../assets/images/Home/testimonials/testimonialShape3_1.webp"

export default function TestimonialsCard({ text, img_1, ClientName, ClientWork, img_2, x }) {
  return (
    <>
      <div className={`client_card ${x ? "white_card display" : "blue_card"}`}>
        <div className="stars_icon">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
        </div>
        <p className={x ? "gray" : "white"}> {text} </p >
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img src={img_1} />
              <div className="client_info d-flex ms-3 flex-column" >
                <span className={x ? "black_name" : "white_name"}> {ClientName} </span>
                <span className={x ? "gray" : "white"} > {ClientWork} </span>
              </div>
            </div>
            <img src={img_2} />
          </div>
        </div>
        <img src={testimonialShape3_1} className="testimonialShape3_1" />
      </div>
    </>
  )
}
