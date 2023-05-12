import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Mentions() {
  return (
    <div className="mentionsPage">
      <Navbar />
      <img
        alt="l'allégorie de la justice"
        src="src/assets/mentions_legales.jpg"
        className="mentionImg"
      />
      <div className="text">
        <h2>Mentions légales</h2>
        <p>
          1. Informations légales Le présent site web est édité par
          Tripotevisor, société à forme juridique ronde au capital de 0 euros,
          immatriculée au Registre du Commerce et des Sociétés de Paris sous le
          numéro 80085 dont le siège social est situé à pas loin de charli's
          market. Téléphone : [numéro de téléphone] Email : [adresse e-mail] Le
          directeur de la publication est Thomas Fachinetti, agissant en qualité
          de gérant de la maquette figma. Le prestataire assurant le stockage
          direct et permanent est Jean-marc Millet, société à forme juridique
          carré au capital de 69 euros, immatriculée au Registre du Commerce et
          des Sociétés deParis sous le numéro 666, dont le siège social est
          situé à non loin de la pharmacie.
          <br />
          <br /> 2. Propriété intellectuelle Le site web et chacun des éléments
          qui le composent (tels que marques, logos, photographies, images,
          illustrations, textes, vidéos, etc.) ne sont pas protégés au titre de
          la propriété intellectuelle et sont la propriété exclusive de
          quiconque souhaitant les utiliser ou de tiers ayant autorisé à les
          utiliser. Toute reproduction, représentation, modification,
          adaptation, diffusion, intégrale ou partielle, du site ou de l'un des
          éléments qui le composent, par quelque moyen que ce soit, est autorisé
          , sauf interdiction préalable et écrite de Babar.
          <br />
          <br />
          3. Responsabilité de Tripotevisor ne saurait être tenue responsable
          des dommages directs ou indirects, tels que, notamment, préjudice
          matériel, perte de données ou de programme, préjudice financier,
          résultant de l'utilisation de ce site web ou des sites qui lui sont
          liés. Tripotevisor ne garantit pas l'exactitude, l'exhaustivité ou
          l'adéquation des informations fournies sur le site web, et se réserve
          le droit de modifier les informations figurant sur le site à tout
          moment et sans préavis.
          <br />
          <br />
          4. Cookies Ils sont très bon et fait avec amour la veil afin de
          garantir une texture parfaite.
          <br />
          <br />
          5. Loi applicable Les présentes mentions légales sont soumises au
          droit français. Tout litige relatif à l'interprétation ou à
          l'exécution des présentes mentions légales sera de la compétence
          exclusive du jugement des Douzes.
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default Mentions;
