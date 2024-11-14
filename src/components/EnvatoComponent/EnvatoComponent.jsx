import "./EnvatoComponent.css"
import evanto from "../../assets/images/About/photo_2024-11-11_08-15-56.jpg"

export default function EnvatoComponent() {
  return (
    <>
      <div className="evanto_com container">
        <h6> 1k + Brands Trust Us </h6>
        <div className="evanto_logos">
          <img src={evanto} className="gray_img" alt="evanto logo" />
          <img src={evanto} className="gray_img" alt="evanto logo" />
          <img src={evanto} alt="evanto logo" />
          <img src={evanto} className="gray_img" alt="evanto logo" />
          <img src={evanto} className="gray_img" alt="evanto logo" />
        </div>
      </div>
    </>
  )
}
