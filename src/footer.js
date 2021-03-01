import React from "react";
import Form from "./form";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function Footer() {
  const gitLink = "https://github.com/PhilippeG85";
  const linkLink = "https://www.linkedin.com/in/philippe-gonse/";
  return (
    <section id="contact">
      <div className="footer">
        <div className="footer-form">
          <h1>Contact-me</h1>
          <Form />
        </div>
        <div className="footer-content">
          <h1>Philippe Gonse</h1>
          <p>
            Interested for freelance opportunies. I will be pleased to hear about your
            projects. Don&apos;t hesitate to contact me if you have questions or request aswell.
          </p>
          <div className="social-icon-div">
            <a href={linkLink} target="_blank" rel="noreferrer" >
              <FontAwesomeIcon className="social-icon" icon={['fab', 'linkedin']} />
            </a>
            <a href={gitLink} target="_blank" rel="noreferrer" >
              <FontAwesomeIcon className="social-icon" icon={['fab', 'github']} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
