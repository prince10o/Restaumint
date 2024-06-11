import React from "react";
import AboutImg from "../assets/images/about-img";
export const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>What makes our food special?</h3>
            <p>
              Welcome to our Food Section, where culinary excellence meets
              creativity and passion! At [Your Company Name], we believe that
              food is more than just sustenance; it's an experience that brings
              people together, tells stories, and creates lasting memories.
            </p>
            <p>
              Our journey in the food industry is driven by a deep love for
              flavors, ingredients, and the joy of eating. We are committed to
              exploring diverse culinary traditions and innovative cooking
              techniques, ensuring that every dish we present is a masterpiece
              of taste and presentation.
            </p>
            <a href="/" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
