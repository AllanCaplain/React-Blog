import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="container container_sidebar">
      <div className="sidebar_item">
        <span className="sidebar_title">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
          className="aboutme_image"
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          dolor perferendis eaque eius architecto, repellendus eum sed
          necessitatibus ad.
        </p>
      </div>
      <div className="sidebar_item">
        <span className="sidebar_title">CATEGORIES</span>
        <ul className="sidebar_list">
          <li className="sidebar_list-item">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebar_list-item">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebar_list-item">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebar_list-item">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebar_list-item">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
          <li className="sidebar_list-item">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar_item">
        <span className="sidebar_title">FOLLOW US</span>
        <div className="sidebar_socials">
          <FaFacebookF className="sidebar_icon" />
          <FaTwitter className="sidebar_icon" />
          <AiOutlineInstagram className="sidebar_icon" />
        </div>
      </div>
    </div>
  );
}
