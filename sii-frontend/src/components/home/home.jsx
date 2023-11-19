import React, { useState, useEffect } from "react";
import "./home.css";
import Button from "../common/button/button";
import PostBox from "../common/postBox/postBox";
import ScrollToTopButton from "../common/button/ScrollToTopButton";
import { customAxios } from "../../lib/customAxios";
import { useNavigate } from "react-router-dom";
import Modal from "../common/modal";
import Detail from "../Detail";

const Home = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState();
  const [isOpened, setIsOpened] = useState(false);
  const [id, setId] = useState();
  const [selectedButton, setSelectedButton] = useState("Recent");

  const open = (id) => {
    setId(id);
    setIsOpened(true);
  };

  const close = () => {
    setIsOpened(false);
  };

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
    } catch (err) {}
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <>
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
              return (
                <PostBox
                  key={data.id}
                  onClick={open}
                  id={data.id}
                  imgSrc={data.img_url}
                  likes={data.likes}
                />
              );
            })}
          </div>
        </div>
        <ScrollToTopButton></ScrollToTopButton>
      </div>
      <Modal isOpened={isOpened} onClose={close}>
        <Detail id={id} close={close} />
      </Modal>
    </>
  );
};

export default Home;
