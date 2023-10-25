import React from "react";
import "./postBox.css";

const PostBox = ({ imgSrc }) => {
  console.log(imgSrc);
  return (
    <div className="postBox">
      <div className="image-container">
        <img src={imgSrc} alt="" className="responsive-image"></img>
      </div>
    </div>
  );
};

export default PostBox;
