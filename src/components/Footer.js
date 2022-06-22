import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://www.twitter.com/mistarpedro/"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare />
      </a>
      <a
        href="https://www.facebook.com/pedroayotunde/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare />
      </a>
      <a
        href="https://www.instagram.com/mistarpedro/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagramSquare />
      </a>
      <a
        href="https://www.linkedin.com/in/ayotundepedro/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </footer>
  );
}

export default Footer;
