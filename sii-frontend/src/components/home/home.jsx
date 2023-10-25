import React, { useState, useEffect } from "react";
import "./home.css";
import Button from "../common/button/button";
import PostBox from "../common/postBox/postBox";
import { customAxios } from "../../lib/customAxios";

const Home = () => {
  const [postData, setPostData] = useState();
  const [selectedButton, setSelectedButton] = useState();

  const request = async () => {
    try {
      const { data } = await customAxios.get("/post");
      setPostData(data.data);
    } catch (err) {}
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <div className="initHome">
      <div className="sortBox">
        <Button
          name="Recent"
          selected={selectedButton === "Recent"}
          setSelected={setSelectedButton}
        ></Button>
        <Button
          name="Most Liked"
          selected={selectedButton === "Most Liked"}
          setSelected={setSelectedButton}
        ></Button>
      </div>
      <div className="postData">
        {postData?.map((data) => {
          console.log(data.id);
          return <PostBox imgSrc={data.img_url}></PostBox>;
        })}
      </div>
    </div>
  );
};

export default Home;
