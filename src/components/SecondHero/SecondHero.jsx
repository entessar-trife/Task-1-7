import "./SecondHero.css"
import line from "../../assets/images/About/hero/line-element.webp"
import element from "../../assets/images/About/hero/element.webp"
import { IoIosArrowForward } from "react-icons/io";

export default function SecondHero({ title }) {
  return (
    <>
      <section className="second_hero">
        <img src={line} className="line" alt="line image" />
        <img src={element} className="element" alt="element image" />
        <div className="hero_text_2">
          <h3> {title} </h3>
          <span>
            Home
            <IoIosArrowForward />
            {title}
          </span>
        </div>
      </section>
    </>
  )
}
