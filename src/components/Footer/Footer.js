import React from "react";
import eLearning from "../../assets/images/eLearning.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content mt-24">
        <div>
          <img className="w-40" src={eLearning} alt="" />
          <p>
            E-Learning
            <br />
            @2022 All right reserved
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Courses</a>
          <a className="link link-hover">Web Development</a>
          <a className="link link-hover">Python</a>
          <a className="link link-hover">Digital Marketing</a>
        </div>
        <div>
          <span className="footer-title">Social Media</span>
          <a href="https://github.com/mh-shak1l" className="link link-hover">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/mhshakil/"
            className="link link-hover"
          >
            Linkedin
          </a>
          <a href="https://facebook.com/mhs.00" className="link link-hover">
            Facebook
          </a>
          <a href="https://twitter.com/sneoo0" className="link link-hover">
            Twitter
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
