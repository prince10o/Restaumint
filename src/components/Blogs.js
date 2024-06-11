import React from "react";
import { blog } from "../Data";
export const Blog = () => {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          our <span>blogs</span>
        </h1>

        <div className="box-container">
          {blog.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <a href="/" className="title">
                  tasty and refreshing foods
                </a>
                <span>by admin / 21st may, 2024</span>
                <p>
                  We invite you to join the conversation by commenting on our
                  posts, sharing your own culinary experiences, and connecting
                  with us on social media. Your feedback and engagement help us
                  create content that resonates with you and enhances your love
                  for food.
                </p>
                <a href="/" className="btn">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
