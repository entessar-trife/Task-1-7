import "./Blogs.css"
import Title from "../Title/Title"
import { BlogsCardsData } from "../../Data/BlogsCardsData"
import BlogsCard from '../BlogsCard/BlogsCard'

export default function Blogs() {
  return (
    <>
      <section className="blogs container">
        <Title
          title="Blogs & News"
          mainTitle="Featured News And Insights"
          center={true}
          arrow={true}
        />
        <div className="blogs_cards">
          {BlogsCardsData.map((e, index) => {
            return (
              <BlogsCard
                key={index}
                img_1={e.img_1}
                title={e.title}
                day={e.day}
                text={e.text}
                img_2={e.img_2}
                show={e.show}
              />
            )
          })
          }
        </div>
      </section>
    </>
  )
}
