/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home({ setPageVisible }) {
  return (
    <div className="homePage">
      <Navbar />
      <img
        alt="panneau indiquant des villes du monde sur une plage"
        src="./src/assets/Home.jpg"
        className="homeImg"
      />
      <div className="text">
        <h2>Besoin d'aide pour trouver votre prochaine destination ?</h2>
        <p>
          Il est souvent difficile de trouver la destination idéal pour nos
          prochaines vacances. <br />
          <br />
          Grâce à Tripotevisor ne prenez plus cette penne.
          <br />
          On vous propose les destinations idéales selon vos envie
        </p>
      </div>
      <button type="button" onClick={() => setPageVisible(0)}>
        DEMARRER
        <img
          alt="Dora l'exploratrice"
          src="./src/assets/dora.png"
          className="dora"
        />
      </button>
      <Footer />
    </div>
  );
}
export default Home;
