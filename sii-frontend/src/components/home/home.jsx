import React, { useState, useEffect } from "react";
import "./home.css";
import Button from "../common/button/button";
import PostBox from "../common/postBox/postBox";
import ScrollToTopButton from "../common/button/ScrollToTopButton";
import { customAxios } from "../../lib/customAxios";

const Home = () => {
  const [postData, setPostData] = useState();
  const [selectedButton, setSelectedButton] = useState("Recent");

  const request = async () => {
    try {
      const { data } = await customAxios.get("/post");
      setPostData(data.data);
    } catch (err) {}
  };

  const requestByLikes = async () => {
    try {
      const { data } = await customAxios.get("/post/likes");
      setPostData(data.data);
      console.log(data.data);
    } catch (err) {}
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <div>
      <div className="initHome">
        <div className="sortBox">
          <Button
            name="Recent"
            selected={selectedButton === "Recent" ? true : false}
            onClick={() => {
              request();
              setSelectedButton("Recent");
            }}
          ></Button>
          <Button
            name="Most Liked"
            selected={selectedButton === "Most Liked" ? true : false}
            setSelected={setSelectedButton}
            onClick={() => {
              requestByLikes();
              setSelectedButton("Most Liked");
            }}
          ></Button>
        </div>
        <div className="postData">
          {postData?.map((data) => {
            return <PostBox imgSrc={data.img_url} likes={data.likes}></PostBox>;
          })}
        </div>
      </div>
      <ScrollToTopButton></ScrollToTopButton>
    </div>
  );
};

export default Home;
