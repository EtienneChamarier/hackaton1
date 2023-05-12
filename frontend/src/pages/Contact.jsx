// import QuestionPage from "./TestPage";
// import questions from "./assets/data";
import "../App.scss";
// import contact from "./pages/contact";

import React from "react";

function Contact() {
  return (
    <div>
      <div id="background_image">
        <img
          src="./src/assets/contact.jpg"
          alt="franche rigolade"
          style={{ width: "100%", height: "217px" }}
        />
      </div>
      <div>
        <div id="title">
          <h1>contact</h1>
        </div>
        <div id="membre">
          <figure>
            <img
              src="./src/assets/etienne.jpg"
              alt="etienne"
              style={{ width: "10vh", height: "10vh" }}
            />
            <figcaption>
              Etienne
              <br /> Chamarier
            </figcaption>
            <div className="logo">
              <img
                src="./src/assets/linkedin.png"
                alt="logo linkedin"
                style={{ width: "4vh", height: "4vh" }}
              />
              <img
                src="./src/assets/github.png"
                alt="logo github"
                style={{ width: "4vh", height: "4vh" }}
              />
            </div>
          </figure>
          <figure>
            <img
              src="./src/assets/Jean-marc.png"
              alt="jean-marc"
              style={{ width: "10vh", height: "10vh" }}
            />
            <figcaption>
              Jean Marc
              <br /> Millet
            </figcaption>
            <div className="logo">
              <img
                src="./src/assets/linkedin.png"
                alt="logo linkedin"
                style={{ width: "4vh", height: "4vh" }}
              />
              <img
                src="./src/assets/github.png"
                alt="logo github"
                style={{ width: "4vh", height: "4vh" }}
              />
            </div>
          </figure>
          <figure>
            <img
              src="./src/assets/malcom.jpg"
              alt="malcom"
              style={{ width: "10vh", height: "10vh" }}
            />
            <figcaption>
              Malcom
              <br /> Destephen
            </figcaption>
            <div className="logo">
              <img
                src="./src/assets/linkedin.png"
                alt="logo linkedin"
                style={{ width: "4vh", height: "4vh" }}
              />
              <img
                src="./src/assets/github.png"
                alt="logo github"
                style={{ width: "4vh", height: "4vh" }}
              />
            </div>
          </figure>
          <figure>
            <img
              src="./src/assets/thomas.jpg"
              alt="thomas"
              style={{ width: "10vh", height: "10vh" }}
            />
            <figcaption>
              Thomas
              <br /> Fachinetti
            </figcaption>
            <div className="logo">
              <img
                src="./src/assets/linkedin.png"
                alt="logo linkedin"
                style={{ width: "4vh", height: "4vh" }}
              />
              <img
                src="./src/assets/github.png"
                alt="logo github"
                style={{ width: "4vh", height: "4vh" }}
              />
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Contact;
