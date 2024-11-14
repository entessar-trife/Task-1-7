import "./BlogsCard.css"
import { FaArrowRight } from "react-icons/fa6";

export default function BlogsCard({ img_1, title, day, text, img_2, show }) {
  return (
    <>
      <div className={show ? "blogs_card display" : "blogs_card"} >
        <img src={img_1} className="card_img" />
        <div className="blogs_card_content">
          <div className="section_1">
            <span className="title"> {title} </span>
            <span className="text-uppercase">
              march
              <span>{day}</span>
              , 2024
            </span>
          </div>
          <div className="section_2"> {text} </div>
          <div className="section_3 d-flex align-items-center justify-content-between">
            <div className="d-flex ">
              <img src={img_2} />
              <div className="d-flex flex-column ms-3">
                <span className="admin"> Admin </span>
                <span className="founder"> Co, Founder </span>
              </div>
            </div>
            <FaArrowRight className="right_arrow" />
          </div>
        </div>
      </div>
    </>
  )
}
