import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-social-media">
        <FontAwesomeIcon icon={faFacebook} className="footer-facebook media" />
        <FontAwesomeIcon icon={faInstagram} className="footer-ig media" />
        <FontAwesomeIcon icon={faTwitter} className="footer-twitter media" />
        <FontAwesomeIcon icon={faYoutube} className="footer-youtube media" />
      </div>
      <div className="footer-text">
        <div className="footer-link">
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
          <p>Media Center</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-button">
          <p>Service Code</p>
        </div>
        <div className="footer-credit">
          <p>© 2022-202? Netlít,Inc. (b2e2a2a9-63d5-4190-b119-ba008b307956)</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
