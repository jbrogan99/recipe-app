import React from "react";

export const Footer = () => {
  return (
    <footer>
      <section className="footer-desc-container footer-container">
        <h4>About</h4>
        <ul className="footer-ul">
          <li>
            <p>Jack Brogan</p>
          </li>
          <li>
            <p>Web Designer and Developer</p>
          </li>
          <li>
            <p>Wigan, Greater Manchester</p>
          </li>
        </ul>
      </section>
      <section className="footer-links-container footer-container">
        <h4>Links</h4>
        <ul className="footer-ul">
          <li>
            <a
              href="https://github.com/jbrogan99?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jack-brogan/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://portfolio-jbrogan.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Personal Portfolio
            </a>
          </li>
        </ul>
      </section>
      <section className="contact-me footer-container">
        <h4>Contact</h4>
        <ul className="footer-ul">
          <li>
            {" "}
            <a
              href="mailto:jack.brogan99@gmail.com?subject=Mail-from-Nutrition-jbrogan"
              target="_blank"
              rel="noreferrer"
            >
              jack.brogan99@gmail.com
            </a>
          </li>
          <li>
            <p>07866361559</p>
          </li>
        </ul>
      </section>
    </footer>
  );
};
