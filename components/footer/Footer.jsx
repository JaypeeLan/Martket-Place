import { IconContext } from "react-icons";
import "./footer.css";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
        <footer id="footer">
          <div>
            <img src="/logo.png" alt="logo" />
            <p>Contact</p>
            <p>laniranjohnpault@gmail.com</p>
            <p>+234 - 000 - 000 - 0</p>
          </div>

          <div>
            <p>Company</p>
            <p>Careers</p>
            <p>Support</p>
            <p>Policy</p>
            <p>FAQs</p>
          </div>

          <div>
            <p>Socials </p>
            <a href="https://github.com/JaypeeLan">
              <FaGithub />{" "}
            </a>
            <a href="https://www.linkedin.com/in/laniranjohnpaul/">
              <FaLinkedin />{" "}
            </a>

            <a href="https://laniran-portfolio.vercel.app">
              <FaLink />{" "}
            </a>
          </div>
        </footer>
      </IconContext.Provider>
    </>
  );
};

export default Footer;
