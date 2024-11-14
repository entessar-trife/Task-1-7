import "./Services.css"
import Title from "../Title/Title"
import { ServicesCardsData } from "../../Data/ServicesCardsData"
import ServicesCard from "../ServicesCard/ServicesCard"
import { ServicesComponentsData } from "../../Data/ServicesComponentsData"
import ServicesComponent from "../ServicesComponent/ServicesComponent"

export default function Services() {
  return (
    <>
      <section className="services">
        <div className="container">
          <Title
            title="Our Services"
            mainTitle="Elevating Businesses With IT Ingenuity"
            arrow={true}
            center={true}
          />
          <div className="services_cards">
            {ServicesCardsData.map((e, index) => {
              return (
                <ServicesCard
                  key={index}
                  image={e.image}
                  title={e.title}
                  desc={e.desc}
                  show={e.show}
                />
              )
            })
            }
          </div>
        </div>
        <iframe
          src="https://www.youtube.com/embed/Tn6-PIqc4UM?si=QN3PLLCJF9wl-l5e"
          className="container"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
        <div className="second_services_part" >
          <div className="services_components container">
            {ServicesComponentsData.map((e, index) => {
              return (
                <ServicesComponent
                  key={index}
                  number={e.number}
                  title={e.title}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
