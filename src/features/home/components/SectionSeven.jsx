import { SectionSevenImg } from "../../../assets/images";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SectionSeven = () => {
  return (
    <div className="section-one">
      <div className="section-one-holder section-seven-holder">
        <div className="section-one-left">
          <div className="section-one-left-width">
            <div className="header-holder section-seven-header-holder">
              <h2 className="section-one-title section-seven-title">
                Let's work together!
              </h2>
              <p className="section-seven-text">Book a free consultation.</p>
              <button className="section-one-btn section-seven-btn">
                contact us
              </button>
            </div>

            <div className="contact-info">
              <div className="phone">
                <p>phone</p>
                <span>123-456-789</span>
              </div>

              <div className="phone">
                <p>email</p>
                <span>hello@frontend.com</span>
              </div>

              <div className="phone">
                <p>social</p>
                <div className="social-holder">
                  <div className="section-seven-logo-holder">
                    <FaFacebookF className="section-seven-icon" />
                  </div>
                  <div className="section-seven-logo-holder">
                    <FaTwitter className="section-seven-icon" />
                  </div>
                  <div className="section-seven-logo-holder">
                    <FaInstagram className="section-seven-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SectionSevenImg className="section-seven-img" />
      </div>
    </div>
  );
};

export default SectionSeven;
