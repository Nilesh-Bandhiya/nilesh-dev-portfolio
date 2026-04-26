import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container section" id="contact">
      <div className="contact-container">
        <h3>Let's Build Something Great</h3>
        <p className="contact-subtext">
          Open to senior frontend &amp; full-stack roles. Available for remote
          opportunities worldwide.
        </p>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:nileshbandhiya2002@gmail.com" data-cursor="disable">
                nileshbandhiya2002@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918980897334" data-cursor="disable">
                +91 8980897334
              </a>
            </p>
            <h4>Location</h4>
            <p>Ahmedabad, Gujarat, India</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Nilesh-Bandhiya"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/nilesh-bandhiya"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="/Nilesh_Bandhiya_Resume.pdf"
              download="Nilesh_Bandhiya_Resume.pdf"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed &amp; Developed <br /> by{" "}
              <span>Nilesh Bandhiya</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
