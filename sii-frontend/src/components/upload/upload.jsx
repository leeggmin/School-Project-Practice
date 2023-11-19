import React, { useState } from "react";
import "./upload.css";
import InputBox from "../common/inputBox/inputBox";
import Button from "../common/button/button";
import Text from "../common/text/text";
import ImageUpload from "../common/imageForm/image";
import { customAxios } from "../../lib/customAxios";

const Upload = () => {
  const [uploadData, setUploadData] = useState({
    prompt: "",
    negative_prompt: "",
  });

  const [postData, setPostData] = useState({
    img_prompt: {},
    img_url: "",
  });

  const [selectedButton, setSelectedButton] = useState("512 x 512");

  const onChangeUploadData = (e) => {
    const { name, value } = e.target;
    setUploadData((prev) => ({ ...prev, [name]: value }));
  };

  const request = async () => {
    try {
      const { data } = await customAxios.post("/image", uploadData);
      setPostData((prev) => ({
        ...prev,
        img_url: data.data.img_url,
        img_prompt: uploadData,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="init">
      <InputBox
        name="prompt"
        value={uploadData.prompt}
        onChange={onChangeUploadData}
        placeholder={"ex. A cute cat in a red house"}
      />
      <InputBox
        name="negative_prompt"
        value={uploadData.negative_prompt}
        onChange={onChangeUploadData}
        placeholder={"ex. scary, dirty"}
      />
      <div className="initBox">
        <div className="box1">
          <Text name="image dimensions"></Text>
          <Button
            name="512 x 512"
            selected={selectedButton === "512 x 512" ? true : false}
            onClick={() => {
              setSelectedButton("512 x 512");
            }}
          />
          <Button
            name="640 x 384"
            selected={selectedButton === "640 x 384" ? true : false}
            onClick={() => {
              setSelectedButton("640 x 384");
            }}
          />
          <Button
            name="384 x 640"
            selected={selectedButton === "384 x 640" ? true : false}
            onClick={() => {
              setSelectedButton("384 x 640");
            }}
          />
          <Button
            name="1024 x 1024"
            selected={selectedButton === "1024 x 1024" ? true : false}
            onClick={() => {
              setSelectedButton("1024 x 1024");
            }}
          />
          <button id="generateBtn" onClick={request}>
            + Generate
          </button>
        </div>
      </div>
      <div className="initBox">
        <ImageUpload url={postData.img_url} data={postData}></ImageUpload>
      </div>
    </div>
  );
};

export default Upload;
