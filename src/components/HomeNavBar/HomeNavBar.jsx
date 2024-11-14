import "./HomeNavBar.css"
import NavLogo from '../../assets/images/Home/NavLogo.svg'
import { CiSearch } from "react-icons/ci"
import { FaShoppingCart } from "react-icons/fa"
import { FaBars, FaXmark } from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { NavLinks } from "../../Data/NavLinks"
import { IoIosArrowDown } from "react-icons/io"
import MainBtn from "../MainBtn/MainBtn"

export default function HomeNavBar() {
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
      <nav className={`nav_1 ${Scroll ? "scroll" : ""}`} >
        <img src={NavLogo} alt="Logo" />
        <ul className="menu_1">
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
        </ul>
        <div className="d-flex align-items-center">
          <div className="nav_icons">
            <CiSearch />
            <FaShoppingCart className="shop_icon" />
          </div>
          <MainBtn
            title="Get a Quote"
            Class={"nav_1_btn"} />
          {Open &&
            <FaXmark
              className="x_mark"
              onClick={IsOpen} />}
          <FaBars
            className={`bars_icon ${Open ? "bars_show" : ""}`}
            onClick={IsOpen} />
        </div>
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
