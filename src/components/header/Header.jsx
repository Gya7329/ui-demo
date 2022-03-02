<<<<<<< HEAD
import "./Header.scss";
export const Header = () => {
  return (
    <nav className="nav__container">
      <ul className="links-wrapper">
        <li className="page-link li" onclick="redirect('#header')">
          Home
        </li>
        <li className="page-link li" onclick="redirect('#about')">
          About
        </li>
        <li className="page-link li" onclick="redirect('#skills')">
          Skills
        </li>
        <li className="page-link li" onclick="redirect('#projects')">
          Projects
        </li>
        <li className="page-link li" onclick="redirect('#contact')">
          Contact
        </li>
      </ul>
    </nav>
=======
import React from "react";
import "./header.css";
export const Header = () => {
  return (
    <>
      <div>
        <div className="navbar-wrapper">
          <li>Home</li>
          <li>Shop</li>
          <li>Categories</li>
          <li>About</li>
          <li>Pages</li>
          <li>Blog </li>
          <li>Find a Store </li>
        </div>
      </div>
    </>
>>>>>>> dcb1a76 (Setup app)
  );
};
