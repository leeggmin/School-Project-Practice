import { React, useEffect, useState } from "react";
import "./navbar.css";
import Img from "../../../img/profile.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [textColor, setTextColor] = useState("white");
  useEffect(() => {
    if (pathname === "/imageGenerator") {
      setTextColor("#5beee5");
    } else {
      setTextColor("#ffffff");
    }
  }, [pathname]);

  return (
    <div className="navbar">
      <a href="/" className="logo">
        SII
      </a>
      <a href="imageGenerator" className="nav" style={{ color: textColor }}>
        AI Image Generator
      </a>
      <input type="text" placeholder="Search for Image"></input>
      <div className="login">
        <a href="/login" className="aTag">
          Log In
        </a>
        <span className="loginImgWrapper">
          <a href="/login" className="aTagInit">
            <img src={Img} alt="" class="loginImg" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
