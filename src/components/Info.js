import React from "react";
import { FaFilePdf, FaGithub } from "react-icons/fa";

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
            <a href="./ayotunde pedro - cv.pdf" target="_blank" rel="noreferrer" >
              <FaFilePdf /> Resume
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
