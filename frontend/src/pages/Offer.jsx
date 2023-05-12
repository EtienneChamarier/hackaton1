/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Offer() {
  return (
    <div className="offerPage">
      <Navbar />
      <img
        alt="le mot hackaton"
        src="./src/assets/Offer.jpg"
        className="offerImg"
      />
      <div className="text">
        <h2>Nos offres d'emploie</h2>
        <p>
          Nous n'avons aucune offre à proposer pour le moment. <br />
          <br />
          Par conséquent nous vous invitons à cliquer{" "}
          <span
            onClick={() => window.open("https://www.pole-emploi.fr/accueil/")}
          >
            ICI
          </span>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default Offer;
