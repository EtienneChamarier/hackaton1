/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <p onClick={() => navigate("/about")}>A PROPOS</p>
      <p onClick={() => navigate("/offer")}>OFFRES D'EMPLOIS</p>
      <p onClick={() => navigate("/contact")}>CONTACT</p>
      <p onClick={() => navigate("/mentions")}>MENTIONS LEGALES</p>
      <span>© 2023 Tripotevisor LLC Tous droits réservés.</span>
    </footer>
  );
}
export default Footer;
