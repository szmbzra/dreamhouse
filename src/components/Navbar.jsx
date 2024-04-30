import React from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ menuItems }) => {
  return (
    <div className="container mx-auto mb-4">
      <nav className="flex justify-between  items-center mt-5">
        <div className="logo w-40">
          <img src={logo} alt="" />
        </div>
        <div className="menubar">
          <ul className="flex gap-10">
            {menuItems.map(({ id, name, linkUrl }) => (
              <li key={id}>
                <Link to={linkUrl}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="register">
          <ul className="flex items-center">
            <li>Register/ </li>
            <li>Login</li>
            <li className="ms-10  text-white px-5 py-4 bg-defaultcolor rounded-lg">
              Sell Property
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
