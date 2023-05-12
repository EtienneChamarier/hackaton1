/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useNavigate } from "react-router-dom";

function Burger({ open, setOpen }) {
  const navigate = useNavigate();
  return (
    <div
      className="menuBurger"
      style={open ? { right: "0%" } : { right: "-100%" }}
    >
      <img
        src="./src/assets/croix.png"
        alt="cross"
        className="cross"
        onClick={() => setOpen(!open)}
      />
      <ul className="burgerUl">
        <li onClick={() => navigate("/")}>HOME</li>
        <li onClick={() => navigate("/about")}>A PROPOS</li>
        <li onClick={() => navigate("/contact")}>CONTACT</li>
        <li onClick={() => navigate("/offer")}>OFFRES D'EMPLOI</li>
        <li onClick={() => navigate("/mentions")}>MENTIONS LEGALES</li>
      </ul>
    </div>
  );
}
export default Burger;
