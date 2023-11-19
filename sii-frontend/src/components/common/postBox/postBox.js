import React from "react";
import "./postBox.css";
import HeartImg from "../../../img/heart.png";
import ViewImg from "../../../img/view.png";

const PostBox = ({ id, imgSrc, likes, onClick }) => {
  return (
    <div className="postBox" onClick={() => onClick(id)}>
      <div className="image-container">
        <img src={imgSrc} alt="" className="responsive-image"></img>
      </div>
      <div className="image-explanation">
        <div>
          <img src={HeartImg} alt="" id="image1"></img>
          <p>{likes}</p>
        </div>
        <div>
          <img src={ViewImg} alt="" id="image2"></img>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
