import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links" />
      <div>
        <span>&copy; 2025 Felipe Hashimoto. All rights reserved.</span>
      </div>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/hashimotofelipe/" target="_blank">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com/fhashimoto" target="_blank">
          <FaGithub size={40} />
        </a>
      </div>
    </div>
  );
};
