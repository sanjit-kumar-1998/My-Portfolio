import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Contact = () => {
  return (
    <>
      <div className="container content" id="contact">
        <h1>Contact me</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <a
            href="https://www.linkedin.com/in/sanjit-behera/"
            target="_blank"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>
          <a
            href="https://github.com/sanjit227"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="https://www.instagram.com/bsanjitkumar/"
            target="_blank"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a href="https://x.com/sanjit_1998" target="_blank" className="items">
            <CiTwitter className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
