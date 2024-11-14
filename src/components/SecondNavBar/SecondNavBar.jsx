import "./SecondNavBar.css"
import NavLogo from '../../assets/images/Home/NavLogo.svg'
import Plane from "../../assets/images/About/plane.webp"
import { CiSearch } from "react-icons/ci"
import { NavLinks } from "../../Data/NavLinks"
import { NavLink } from "react-bootstrap"
import { IoIosArrowDown } from "react-icons/io"
import { useEffect, useState } from "react"
import { FaBars, FaXmark } from "react-icons/fa6"
import MainBtn from "../MainBtn/MainBtn"

export default function SecondNavBar() {
  const [Open, setOpen] = useState(false)
  function IsOpen() {
    setOpen(!Open)
  }

  const [Scroll, setScroll] = useState(false)
  function handleScroll() {
    setScroll(window.scrollY > 50)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <>
      <nav className={`nav_2 ${Scroll ? "scroll" : "bg-white"}`}>
        <img src={Plane} alt="plane image" />
        <img src={NavLogo} alt="Logo" />
        <div className="d-flex align-items-center">
          <ul className="menu_1">
            {NavLinks.map((e, index) => {
              return (
                <NavLink
                  className=""
                  key={index}
                  to={(e.href)}>
                  {(e.item)}
                  {(e.x) && <IoIosArrowDown />}
                </NavLink>
              )
            })
            }
            <CiSearch className="search_icon" />
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <CiSearch className="search_show" />
          <FaBars
            className={`bars_icon ${Open ? "bars_show" : ""}`}
            onClick={IsOpen}
          />
          {Open &&
            <FaXmark
              className="x_mark"
              onClick={IsOpen}
            />}
        </div>
        <div className="btn_bg"> </div>
        <MainBtn
          title="Get a Quote"
          Class={"nav_2_btn"} />
        <ul className={`menu_2 
        ${Open ? "responsive_menu" : ""}
        ${Scroll ? "scroll" : "bg-white"}`}>
          {NavLinks.map((e, index) => {
            return (
              <NavLink
                key={index}
                to={(e.href)}>
                {(e.item)} {(e.x) && <IoIosArrowDown />}
              </NavLink>
            )
          })
          }
          <MainBtn
            title="Get a Quote"
            Class={"res_btn"} />
        </ul>
      </nav>
    </>
  )
}
