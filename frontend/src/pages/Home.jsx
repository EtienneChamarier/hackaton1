import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
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
      <button type="button">DEMARRER</button>
      <Footer />
    </div>
  );
}
export default Home;
