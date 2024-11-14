import { TestimonialsCardData } from "../../Data/TestimonialsCardData"
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard"
import Title from "../Title/Title"
import "./Testimonials.css"

export default function Testimonials() {
  return (
    <>
      <section className="testimonials">
        <Title
          title="Testimonials"
          mainTitle="Our Latest Client Feedback"
          center={false}
          arrow={false}
        />
        <div className="testimonials_cards container">
          {TestimonialsCardData.map((e, index) => {
            return (
              <TestimonialsCard
                key={index}
                text={e.text}
                img_1={e.img_1}
                ClientName={e.ClientName}
                ClientWork={e.ClientWork}
                img_2={e.img_2}
                x={e.x} />
            )
          })}
        </div>
        <div className="first_tab">
          <div className="second_tab"></div>
        </div>
      </section>
    </>
  )
}
