// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

{
  /**
FOOTER COMPONENT WITH HREF TO MY SOCIAL MEDIA LINKs
*/
}
const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start mt-5"
      style={{ backgroundColor: "#191919" }}
    >
      <div className="container d-flex justify-content-center pt-3">
        <button
          type="button"
          className="btn btn-secondary btn-lg btn-floating mx-2 text-white"
          style={{ backgroundColor: "#e60000" }}
          href="https://www.linkedin.com/in/juanolima/?locale=en_US" target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg btn-floating mx-2 text-white"
          style={{ backgroundColor: "#e60000" }}
          
        >
          <FontAwesomeIcon icon={faGithub}
          href="https://github.com/jolimadev" target="_blank"
          />
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg btn-floating mx-2 text-white"
          style={{ backgroundColor: "#e60000" }}
          href="https://jolimadev.netlify.app/" target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </button>
      </div>

      <hr className="text-white"></hr>
      <p className="text-white text-center ">©2024 Made by jolimadev for Annata-Challenge</p>
    </footer>
  );
};

export default Footer;
