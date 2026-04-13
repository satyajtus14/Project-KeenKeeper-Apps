import React from "react";
import logoImg from "../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { FiHome } from "react-icons/fi";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <nav className="shadow-sm ">
      <div className="container mx-auto flex justify-between gap-4 items-center py-[8px] mb-25">
        <img src={logoImg} alt="" className=" w-[80px] md:w-[120px]" />

        <ul className="flex justify-between items-center gap-8">
          <li ><MyNavLink to={"/"}> <FiHome />Home</MyNavLink></li>
          <li><MyNavLink to={"/timeline"}> <RiTimeLine /> Timeline </MyNavLink></li>
          <li><MyNavLink to={"/stats"}><ImStatsDots /> Stats</MyNavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
