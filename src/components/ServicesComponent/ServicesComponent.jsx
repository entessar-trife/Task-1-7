import "./ServicesComponent.css"

export default function ServicesComponent({ number, title, x }) {
  return (
    <>
      <div className="services_component container" >
        <span className={x ? "gray_number" : "white_number"} > {number} </span>
        <h4> {title} </h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Recusandae suscipit vitae quis. Eos, numquam voluptatibus.
        </p>
      </div>
    </>
  )
}
