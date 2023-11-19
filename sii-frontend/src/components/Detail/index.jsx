import React, { useEffect, useState } from "react";
import { customAxios } from "../../lib/customAxios";
import "./style.css";
import Profile from "../../img/profileIcon";
import closeIcon from "../../img/Mask group.png";
import dayjs from "dayjs";

const Detail = ({ id, close }) => {
  const [post, setPost] = useState();

  const request = async () => {
    try {
      const { data } = await customAxios.get(`/post/${id}`);
      setPost(data.data);
    } catch (err) {}
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <div onClick={(e) => e.stopPropagation()} className="container">
      <div className="topWrap">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Profile />
          <p className="name">Leeggmin</p>
        </div>
        <img
          src={closeIcon}
          alt=""
          className="img"
          onClick={close}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div style={{ display: "flex", gap: "55px" }}>
        {post?.img_url && <img src={post.img_url} className="img_url" alt="" />}
        <div className="rightWrap">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "30px" }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <h2 className="title">Prompt</h2>
              <div className="text">
                {post?.prompt.substring(0, 250).concat("...")}
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <h2 className="title">negative_prompt</h2>
              <div className="text">
                {post?.negative_prompt.substring(0, 250).concat("...")}
              </div>
            </div>
            <div style={{ display: "flex", gap: "15px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <p className="text">Image Dimensions</p>
                <h2 className="title" style={{ fontSize: "19px" }}>
                  512 X 512 px
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <p className="text">Generated</p>
                <h2 className="title" style={{ fontSize: "19px" }}>
                  {dayjs(post?.create_post_date_time).format("DD / MM / YYYY")}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
