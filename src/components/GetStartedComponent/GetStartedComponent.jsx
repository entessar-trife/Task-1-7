import MainBtn from "../MainBtn/MainBtn"
import "./GetStartedComponent.css"


export default function GetStartedComponent() {
  return (
    <>
      <div className="started_com">
        <h4> Ready to Get Started? </h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime laboriosam harum
          ipsum.
        </p>
        <div className="inputs">
          <div className="d-flex flex-column">
            <label htmlFor="name"> Your Name* </label>
            <input type="text" className="my-2" id="name" />
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="email"> Your Email* </label>
            <input type="email" className="my-2" id="email" />
          </div>
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="message" className="mt-3"> Write Message* </label>
          <textarea id="message" className="my-2"></textarea>
        </div>
        <MainBtn
          title="Send Message"
          Class={"members_btn"} />
      </div>
    </>
  )
}
