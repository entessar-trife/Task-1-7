import "./SliderLogos.css"

export default function SliderLogos({ image_1, image_2, image_3, image_4, image_5, text, text_1, text_2, text_3, text_4, border }) {
  return (
    <>
      <div className={`slider_logos ${border ? "border" : ""}`}>
        <div className="logos d-flex">
          <div className="d-flex align-items-center">
            <img src={image_1} />
            {text && <span className="text"> {text_1} </span>}
          </div>
          <div className="img_name d-flex align-items-center">
            <img src={image_2} />
            {text && <span className="text"> {text_2} </span>}
          </div>
          <div className="img_name d-flex align-items-center">
            <img src={image_3} />
            {text && <span className="text"> {text_3} </span>}
          </div>
          <div className="img_name d-flex align-items-center">
            <img src={image_4} />
            {text && <span className="text"> {text_4} </span>}
          </div>
          <div className="img_name d-flex align-items-center">
            <img src={image_5} />
          </div>
          <div className="img_name d-flex align-items-center">
            <img src={image_1} />
            {text && <span className="text"> {text_1} </span>}
          </div>
          <div className="img_name d-flex align-items-center">
            <img src={image_2} />
            {text && <span className="text"> {text_2} </span>}
          </div>
          <div className="img_name d-flex align-items-center">
            <img src={image_3} />
            {text && <span className="text"> {text_3} </span>}
          </div>
          <div className="img_name d-flex align-items-center">
            <img src={image_4} />
            {text && <span className="text"> {text_4} </span>}
          </div>
          <div className="img_name d-flex align-items-center">
            <img src={image_5} />
          </div>
        </div>
      </div>
    </>
  )
}
