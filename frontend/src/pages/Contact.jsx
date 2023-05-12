/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import QuestionPage from "./TestPage";
// import questions from "./assets/data";
import "../App.scss";
// import contact from "./pages/contact";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="contact">
      <Navbar />
      <div id="background_image">
        <img
          src="./src/assets/contact.jpg"
          alt="franche rigolade"
          style={{ width: "100%", height: "217px" }}
        />
      </div>
      <div>
        <div id="title">
          <h1>Contact</h1>
        </div>
        <div id="membre">
          <figure>
            <img
              src="./src/assets/etienne.jpg"
              alt="etienne"
              style={{ width: "10vh", height: "10vh", borderRadius: "100%" }}
            />
            <figcaption>
              Etienne
              <br /> <b>Chamarier</b>
            </figcaption>
            <div className="logo">
              <img
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/etienne-chamarier-243843ba/"
                  )
                }
                src="./src/assets/linkedin.png"
                alt="logo linkedin"
                style={{ width: "4vh", height: "4vh", cursor: "pointer" }}
              />
              <img
                onClick={() =>
                  window.open("https://github.com/EtienneChamarier")
                }
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
              style={{ width: "10vh", height: "10vh", borderRadius: "100%" }}
            />
            <figcaption>
              Jean Marc
              <br /> <b>Millet</b>
            </figcaption>
            <div className="logo">
              <img
                onClick={() =>
                  window.open("https://www.linkedin.com/in/jeanmarcmillet/")
                }
                src="./src/assets/linkedin.png"
                alt="logo linkedin"
                style={{ width: "4vh", height: "4vh" }}
              />
              <img
                onClick={() => window.open("https://github.com/JeanMMillet")}
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
              style={{ width: "10vh", height: "10vh", borderRadius: "100%" }}
            />
            <figcaption>
              Malcom
              <br /> <b>Destephen</b>
            </figcaption>
            <div className="logo">
              <img
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/malcom-destephen-67339b269/?originalSubdomain=fr"
                  )
                }
                src="./src/assets/linkedin.png"
                alt="logo linkedin"
                style={{ width: "4vh", height: "4vh" }}
              />
              <img
                onClick={() =>
                  window.open("https://github.com/MalcomDestephen")
                }
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
              style={{ width: "10vh", height: "10vh", borderRadius: "100%" }}
            />
            <figcaption>
              Thomas
              <br /> <b>Fachinetti</b>
            </figcaption>
            <div className="logo">
              <img
                onClick={() =>
                  window.open("https://www.linkedin.com/in/thomas-fachinetti/")
                }
                src="./src/assets/linkedin.png"
                alt="logo linkedin"
                style={{ width: "4vh", height: "4vh" }}
              />
              <img
                onClick={() => window.open("https://github.com/Thomas-Fch")}
                src="./src/assets/github.png"
                alt="logo github"
                style={{ width: "4vh", height: "4vh" }}
              />
            </div>
          </figure>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
