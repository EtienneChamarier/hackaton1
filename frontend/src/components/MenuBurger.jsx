/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

function Burger({ open, setOpen }) {
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
        <li>A PROPOS</li>
        <li>CONTACT</li>
        <li>OFFRES D'EMPLOI</li>
        <li>MENTIONS LEGALES</li>
      </ul>
    </div>
  );
}
export default Burger;
