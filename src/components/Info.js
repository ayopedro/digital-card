import React from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";

function Info() {
  return (
    <section className="info">
      <div className="info-img" />
      <div className="container">
        <h1 className="title">Ayotunde Pedro</h1>
        <p className="description">Web Developer</p>
        <p className="location">Lagos, Nigeria</p>
        <div className="btns">
          <button className="email-btn">
            <a href="CV - Ayotunde Pedro.pdf" target="_blank" rel="noreferrer">
              <FaEnvelope /> Email
            </a>
          </button>
          <button className="linkedin-btn">
            <a
              href="https://www.github.com/ayopedro"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Info;
