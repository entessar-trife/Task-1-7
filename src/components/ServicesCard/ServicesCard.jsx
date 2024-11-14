import "./ServicesCard.css"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"

export default function ServicesCard({ image, title, desc, show }) {
  return (
    <>
      <div className={show ? "services_card display" : "services_card"} >
        <img src={image} />
        <h4> {title} </h4>
        <p> {desc} </p>
        <a href="#">
          Read more
          <MdKeyboardDoubleArrowRight />
        </a>
      </div>
    </>
  )
}
