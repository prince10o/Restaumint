import React from "react";

export const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
          <a href="/" className="fab fa-facebook-f">
            {""}
          </a>
          <a href="/" className="fab fa-twitter">
            {""}
          </a>
          <a href="/" className="fab fa-instagram">
            {""}
          </a>
          <a href="/" className="fab fa-linkedin">
            {""}
          </a>
          <a href="/" className="fab fa-pinterest">
            {""}
          </a>
        </div>
        <div className="links">
          <a href="/home">home</a>
          <a href="/about">about</a>
          <a href="/menu">menu</a>
          <a href="/products">products</a>
          <a href="/preview">review</a>
          <a href="/contact">contact</a>
          <a href="/bLogs">blogs</a>
        </div>
        <div className="credit">
          created by <span>AMRIT PREET SINGH</span>
        </div>
      </section>
    </>
  );
};
