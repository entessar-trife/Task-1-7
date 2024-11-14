import "./Pricing.css"
import PricingShape1_1 from "../../assets/images/Home/pricing/pricingShape1_1.webp"
import PricingShape1_2 from "../../assets/images/Home/pricing/pricingShape1_2.webp"
import PricingIcon1_2 from "../../assets/images/Home/pricing/pricingIcon1_2.svg"
import Title from "../Title/Title"
import { PricingCardsData } from "../../Data/PricingCardsData"
import PricingCard from "../PricingCard/PricingCard"

export default function Pricing() {
  return (
    <>
      <section className="pricing">
        <Title
          title="Our pricing"
          mainTitle="Our Awesome Pricing Plans"
          center={false}
          arrow={false}
        />
        <div className="title_2">
          <div className="month_year">
            <button> Monthly </button>
            <button> Yearly </button>
          </div>
          <img src={PricingIcon1_2} className="pricing_icon" />
          <span className="save"> Save 25% </span>
        </div>
        <img src={PricingShape1_2} className="pricing_shape_2" />
        <div className="pricing_cards container">
          {PricingCardsData.map((e, index) => {
            return (
              <PricingCard
                key={index}
                blue={e.blue}
              />
            )
          })
          }
        </div>
        <img src={PricingShape1_1} className="pricing_shape_1" />
      </section>
    </>
  )
}
