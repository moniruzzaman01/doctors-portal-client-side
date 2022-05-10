import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="p-10 bg-contain w-full mt-10"
    >
      <div className="footer justify-around">
        <div>
          <span className="footer-title uppercase  text-lg">Services</span>
          <Link to="" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="" className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title text-lg">Oral Health</span>
          <Link to="" className="link link-hover">
            "Flouride Treatment"
          </Link>
          <Link to="" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="" className="link link-hover">
            Teeth Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title text-lg">Our Address</span>
          <Link to="" className="link link-hover">
            New York - 101010
          </Link>
        </div>
      </div>
      <p className="text-center font-bold mt-10">
        Copyright@2022 - All right reserved to Moniruzzaman
      </p>
    </footer>
  );
};

export default Footer;
