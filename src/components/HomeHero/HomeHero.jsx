import "./HomeHero.css"
import { CiWavePulse1 } from "react-icons/ci"
import HeroShape_3 from "./../../assets/images/Home/hero/heroShape1_3.webp"
import HeroThumb from "./../../assets/images/Home/hero/heroThumb1_1.webp"
import ProfileShape from "./../../assets/images/Home/hero/profileShape1_1.webp"
import { FaStar } from "react-icons/fa"
import { GiCheckMark } from "react-icons/gi"
import MainBtn from "../MainBtn/MainBtn"
export default function HomeHero() {
  return (
    <>
      <section className="HomeHero">
        <div className="left_side">
          <span className="hero_span fw-semibold">
            <CiWavePulse1 className="pulse_icon" />
            Every Thing You Need To Create A Website
          </span>
          <h1> Business Innovation With IT Services Expertise </h1>
          <ul>
            <li>
              <GiCheckMark className="me-2" />
              Deployment and Support
            </li>
            <li>
              <GiCheckMark className="me-2" />
              Discovery and Analysis
            </li>
          </ul>
          <ul>
            <li>
              <GiCheckMark className="me-2" />
              Flexibility and Adaptability
            </li>
            <li>
              <GiCheckMark className="me-2" />
              Competitive Advantage
            </li>
          </ul>
          <MainBtn
            title="Get started"
            Class={"orange_btn"} />
          <div className="profile_shape">
            <div className="trustipilot">
              <div className="d-flex">
                < FaStar className="green_star" />
                <h6> Trustipilot </h6>
              </div>
              <div className="d-flex">
                <img src={ProfileShape} />
                <div className="d-flex flex-column ms-2">
                  <div className="mb-1">
                    <FaStar className="star_icon" />
                    <FaStar className="star_icon" />
                    <FaStar className="star_icon" />
                  </div>
                  <span className="reviews">  450+ reviews </span>
                </div>
              </div>
            </div>
            <div className="google">
              <h6> Google </h6>
              <div className="d-flex">
                <img src={ProfileShape} />
                <div className="d-flex flex-column ms-2">
                  <div className="mb-1">
                    <FaStar className="star_icon" />
                    <FaStar className="star_icon" />
                    <FaStar className="star_icon" />
                  </div>
                  <span className="reviews">  450+ reviews </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="hero_thumb" src={HeroThumb} />
        </div>
        <img src={HeroShape_3} className="hero_Shape_3" />
      </section>
    </>
  )
}
