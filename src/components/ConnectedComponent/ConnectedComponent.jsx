import "./ConnectedComponent.css"
import ctaThumb from "../../assets/images/Home/ctaThumb.webp"
import ctaShape_1 from "../../assets/images/ctaShape2_4.webp"
import ctaShape_2 from "../../assets/images/ctaShape2_1.webp"
import MainBtn from "../MainBtn/MainBtn"

export default function ConnectedComponent() {
  return (
    <>
      <div className="connected_component container ">
        <img src={ctaThumb} className="ctaThumb" />
        <span> Stay Connected With Cutting Edge IT </span>
        <img src={ctaShape_1} className="ctaShape_1" />
        <MainBtn
          title="Talk to a specialist"
          Class={"connected_btn"}
        />
        <img src={ctaShape_2} className="ctaShape_2" />
      </div>
    </>
  )
}
