import "./MembersCard.css"
import { IoShareSocialOutline } from "react-icons/io5"
import blueBg from "../../assets/images/About/team members/wave(4).svg"

export default function MembersCard({ memberImg, memberName, memberWork }) {
  return (
    <>
      <div className="members_card">
        <img src={memberImg} className="member_img" alt="member image" />
        <img src={blueBg} className="blue_bg w-100" alt="blue background" />
        <div className="member_info">
          <h4> {memberName} </h4>
          <span> {memberWork} </span>
          <a href="#">
            <IoShareSocialOutline className="share" />
          </a>
        </div>
      </div>
    </>
  )
}
