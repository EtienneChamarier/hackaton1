import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="aboutPage">
      <Navbar />
      <img
        alt="le mot hackaton"
        src="./src/assets/A_Propos.png"
        className="homeImg"
      />
      <div className="text">
        <h2>A propos du site</h2>
        <p>
          Tripotevisor est un projet réalisé lors d'un hackaton à la Wild code
          school de Paris en mai 2023.
          <br />
          <br /> Nous avons eu pour thème “vacances”. La problématique que nous
          avons soulevé est la difficulté à trouver sa distination pour ses
          prochaines vacances. <br />
          <br />
          Mais grâce à Tripotevisor l'utilisateur répond à des questions simple
          et reçoit des propositions originales selon ses envies.
          <br />
          <br /> Le groupe est composé de 4 personnes: Thomas Fachinetti,
          Jean-Marc Millet, Malcom Destephen et Etienne Chamarier
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default About;
