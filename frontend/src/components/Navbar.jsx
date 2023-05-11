/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import Burger from "./MenuBurger";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./src/assets/tripotevisor.png" alt="tripotevisor logo" />
      </div>
      <h2>Tripotevisor.</h2>
      <img
        className="burger"
        src="./src/assets/burger.png"
        onClick={() => setOpen(!open)}
        alt="burger"
      />
      <Burger open={open} setOpen={setOpen} />
    </nav>
  );
}

export default Navbar;
