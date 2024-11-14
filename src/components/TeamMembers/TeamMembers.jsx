import "./TeamMembers.css"
import Title from "../Title/Title"
import MembersCard from "../MembersCard/MembersCard"
import { MembersCardData } from "../../Data/MembersCardData"
import EnvatoComponent from "../EnvatoComponent/EnvatoComponent"

export default function TeamMembers() {
  return (
    <>
      <section className="team_member container">
        <Title
          title="Team Members"
          mainTitle="Our Dedicated Team Members"
          center={true}
          button={true}
        />
        <div className="member_card">
          {MembersCardData.map((e, index) => {
            return (
              <MembersCard
                key={index}
                memberImg={e.memberImg}
                memberName={e.memberName}
                memberWork={e.memberWork}
              />
            )
          })}
        </div>
        <EnvatoComponent />
      </section>
    </>
  )
}
