import { Col, Container, Row } from "react-bootstrap"
import "./Footer.css"
import FooterLogo from "../../assets/images/footer/FooterLogo.svg"
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"
import { MdKeyboardDoubleArrowRight, MdEmail } from "react-icons/md"
import { SlCalender } from "react-icons/sl"
import footerThumb1_1 from "../../assets/images/footer/footerThumb1_1.webp"
import footerThumb1_2 from "../../assets/images/footer/footerThumb1_2.webp"
import { FaPhone, FaArrowRightLong, FaFacebookF } from "react-icons/fa6"

export default function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col lg="3" md="6" className="mt-5">
              <img src={FooterLogo} alt="footer logo" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos perferendis numquam dolore blanditiis culpa.
              </p>
              <div className="footer_icons">
                <a className="text-decoration-none" href="#">
                  <FaFacebookF className="footer_icon" />
                </a>
                <a className="text-decoration-none" href="#">
                  <FaTwitter className="footer_icon" />
                </a>
                <a className="text-decoration-none" href="#">
                  <FaYoutube className="footer_icon" />
                </a>
                <a className="text-decoration-none" href="#" >
                  <FaInstagram className="footer_icon" />
                </a>
              </div>
            </Col>
            <Col lg="2" md="6" className="mt-5">
              <h5> Quick Links </h5>
              <ul className="list-unstyled">
                <li>
                  <MdKeyboardDoubleArrowRight className="fs-4" />
                  <a className="text-decoration-none" href="#"> Extech About </a>
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight className="fs-4" />
                  <a className="text-decoration-none" href="#"> Our Services </a>
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight className="fs-4" />
                  <a className="text-decoration-none" href="#"> Our Blogs </a>
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight className="fs-4" />
                  <a className="text-decoration-none" href="#"> FAQ’S </a>
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight className="fs-4" />
                  <a className="text-decoration-none" href="#"> Contact Us </a>
                </li>
              </ul>
            </Col>
            <Col lg="4" md="6" className="mt-5">
              <h5> Recent Posts </h5>
              <div className="post">
                <img src={footerThumb1_1} />
                <div className="post_content">
                  <span className="d-flex align-items-center">
                    <SlCalender className="me-2 fs-5 text-white" />
                    15th April,2024
                  </span>
                  <span> Top 5 Most Famous </span>
                  <span> Technology Trend In 2024</span>
                </div>
              </div>
              <div className="post">
                <img src={footerThumb1_2} />
                <div className="post_content">
                  <span className="d-flex align-items-center">
                    <SlCalender className="me-2 fs-5 text-white" />
                    20th June,2024
                  </span>
                  <span> The Surfing Man Will Blow </span>
                  <span> Your Mind </span>
                </div>
              </div>
            </Col>
            <Col lg="3" md="6" className="mt-5">
              <h5> Contact Us </h5>
              <div className="contact_info">
                <span>
                  <MdEmail className="me-2" />
                  <a href="#" className="text-decoration-none">
                    info@example.com
                  </a>
                </span>
                <span>
                  <FaPhone className="me-2" />
                  <a href="#" className="text-decoration-none"> +208-6666-0112 </a>
                </span>
                <div className="email_input">
                  <input type="email" placeholder="Your Email Address" />
                  <button type="submit">
                    <FaArrowRightLong className="arrow" />
                  </button>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <input type="checkbox" id="check" className="me-1" />
                  <label for="check">
                    I agree to the
                    <a href="#">  Privacy Policy </a>
                  </label>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="copy">
        <div className="container d-flex flex-wrap justify-content-around">
          <span> All Copyright 2024 by Extech </span>
          <div>
            <span className="me-3"> Terms & Condition </span>
            <span className="ms-2"> Privacy Policy </span>
          </div>
        </div>
      </div>
    </>
  )
}
