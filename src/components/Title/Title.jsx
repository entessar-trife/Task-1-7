import "./Title.css"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import MainBtn from "../MainBtn/MainBtn"

export default function Title({ title, mainTitle, arrow, center, button }) {
  return (
    <>
      <div className="title_component">
        <div className={center ? " " : "center_1"}>
          <div className="title">
            <div className={`d-flex align-items-center ${center ? " " : "center_2 "}`}>
              <div className="me-2 d-flex align-items-center">
                <GoTriangleLeft className="fs-5" />
                <div className="title_arrow_left"></div>
              </div>
              {title}
              <div className="ms-2 d-flex align-items-center">
                <div className="title_arrow_right"></div>
                <GoTriangleRight className="fs-5" />
              </div>
            </div>
          </div>
          <h2> {mainTitle} </h2>
        </div>
        {arrow &&
          <div>
            <IoIosArrowRoundBack className="back" />
            <IoIosArrowRoundForward className="forward" />
          </div>}
        {button &&
          <MainBtn
            title="All Members"
            Class={"members_btn"} />
        }
      </div>
    </>
  )
}
