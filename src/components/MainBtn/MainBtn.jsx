import { FaArrowRight } from "react-icons/fa"
import "./MainBtn.css"

export default function MainBtn({ title, Class }) {
  return (
    <>
      <button className={`button ${Class}`} >
        {title}
        <FaArrowRight className="ms-2 mb-1" />
      </button>
    </>
  )
}
