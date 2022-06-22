import React from "react";
import Bio from "./Bio";
import Interest from "./Interest";

function About() {
  return (
    <section className="about">
      <div className="container">
        <Bio />
        <Interest />
      </div>
    </section>
  );
}

export default About;
