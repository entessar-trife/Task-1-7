import "./PricingCard.css"
import PricingIcon1_1 from "./../../assets/images/Home/pricing/pricingIcon1_1.svg"
import { RxQuestionMarkCircled } from "react-icons/rx"
import { FaArrowRightLong } from "react-icons/fa6"

export default function PricingCard({ blue }) {
  return (
    <>
      <div className="pricing_card">
        <div className={blue ? 'pricing_card_title_1' : 'pricing_card_title_2'}>
          <div>
            <span className="fw-semibold fs-4"> Regular Plans </span>
            <div>
              <span className="fw-semibold fs-3"> $49</span>
              <span className="month">/Month </span>
            </div>
          </div>
          <img src={PricingIcon1_1} className="PricingIcon1_1" />
        </div>
        <div className="pricing_card_content">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="true"> ✓ </span>
              100 GB SSD Storage
            </div>
            <RxQuestionMarkCircled />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="true"> ✓ </span>
              Weekly Backups
            </div>
            <RxQuestionMarkCircled />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="true"> ✓ </span>
              Unlimited Free SSL
            </div>
            <RxQuestionMarkCircled />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="true"> ✓ </span>
              24/7 System Monitoring
            </div>
            <RxQuestionMarkCircled />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="true"> ✓ </span>
              Free Domain ($9.99 value)
            </div>
            <RxQuestionMarkCircled />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="false"> x </span>
              Frame 164236
            </div>
            <RxQuestionMarkCircled />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span className="false"> x </span>
              20 Payment Methods
            </div>
            <RxQuestionMarkCircled />
          </div>
        </div>
        <button className={blue ? 'started_now_1' : 'started_now_2'} href="#">
          Get Started Now
          <FaArrowRightLong className="ms-2" />
        </button>
      </div>
    </>
  )
}
