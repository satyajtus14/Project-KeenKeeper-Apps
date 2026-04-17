import React from "react";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";

const Footer = () => {
  return (
    <div className="container mx-auto bg-[#244d3f] p-4 md:p-6">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl text-center text-white font-bold my-6">
          KeenKeeper
        </h1>

        <p className="text-white text-center text-sm sm:text-base max-w-2xl mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>

      <div className="text-center text-white font-semibold shadow mb-6">
        <h2 className="mb-4">Social Links</h2>

        <div className="flex justify-center items-center gap-4 mb-4">
          <img
            src={facebook}
            alt="Facebook"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <img
            src={instagram}
            alt="Instagram"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <img src={twitter} alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white text-sm sm:text-base text-center md:text-left">
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
