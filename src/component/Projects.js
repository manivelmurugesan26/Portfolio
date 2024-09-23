import React from "react";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul className="projects-list">
        <li>
          <strong>TUNEHUB : </strong> A full-stack Java application
          with React frontend and Spring Boot backend.
        </li>
        <p>
        GitHub:{" "}
        <a href="https://github.com/manivelmurugesan26" target="_blank" rel="noopener noreferrer">
        TUNEHUB PROJECT
        </a>
      </p>
        <li>
          <strong>ROOFSTACK : </strong> A web-based task management tool using
          Java, Spring Boot, and React.
        </li>
        <p>
        GitHub:{" "}
        <a href="https://github.com/manivelmurugesan26" target="_blank" rel="noopener noreferrer">
          ROOFSTACK PROJECT
        </a>
      </p>
        <li>
          <strong>Portfolio Website : </strong> This portfolio is built using
          React and demonstrates my web development skills.
        </li>
        <p>
        GitHub:{" "}
        <a href="https://github.com/manivelmurugesan26" target="_blank" rel="noopener noreferrer">
          PORTFOLIO PROJECT
        </a>
      </p>
      </ul>
    </section>
  );
}

export default Projects;

