import React from "react";
import "./image.css";
import Img from "../../../img/imageAdd.png";
import { customAxios } from "../../../lib/customAxios";
import { useNavigate } from "react-router-dom";

const ImageUpload = ({ url, data }) => {
  const postData = { ...data };
  const navigate = useNavigate();
  const imgUrl = url === "" ? Img : url;

  const request = async () => {
    try {
      await customAxios.post("/post", postData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="imageDiv">
      <img src={imgUrl} alt="" className="dropzone" />
      <div className="btnForm">
        <p>Do you want to post this image?</p>
        <button id="uploadBtn" onClick={request}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
