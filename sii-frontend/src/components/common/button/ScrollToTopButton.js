import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import upArrowIcon from "../../../img/scroll.png";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <img className="scrollImg" src={upArrowIcon} alt="Up Arrow" />
      <i className="fa fa-chevron-up"></i>
    </div>
  );
};

export default ScrollToTopButton;
