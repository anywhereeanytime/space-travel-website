import React from "react";
import logo from "./assets/shared/logo.svg";
import iconBurger from "./assets/shared/icon-hamburger.svg";
import iconClose from "./assets/shared/icon-close.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-screen relative">
      <nav className="flex justify-between items-center p-6">
        {/* Logo */}
        <div className="h-10 w-10">
          <img src={logo} alt="space tourism logo" />
        </div>
        {/* Burger */}
        <button
          className={`block justify-self-end ${isMenuOpen ? "hidden" : ""}`}
          onClick={toggleMenu}
        >
          <img src={iconBurger} alt="menu icon" className="h-8 w-8" />
        </button>
      </nav>

      {/* Menu */}
      <div
        className={`flex flex-col fixed top-0 right-0 h-screen w-2/3 bg-clrWhite/5 backdrop-blur-sm transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-400 ease-in-out`}
      >
        <button onClick={toggleMenu} className="h-8 w-8 self-end m-6">
          <img src={iconClose} className="h-8 w-8" alt="close icon" />
        </button>

        <div className="h-screen flex self-center justify-center">
          <ul className="flex flex-col gap-9 mt-9">
            <li>
              <a className="font-sansCond uppercase tracking-letterSpacing2 text-clrLight text-xl">
                <span className="text-clrLight">00 </span>Home
              </a>
            </li>
            <li>
              <a className="font-sansCond uppercase tracking-letterSpacing2 text-clrLight text-xl">
                <span className="text-clrLight">01 </span>Destination
              </a>
            </li>
            <li>
              <a className="font-sansCond uppercase tracking-letterSpacing2 text-clrLight text-xl">
                <span className="text-clrLight">02 </span>Crew
              </a>
            </li>
            <li>
              <a className="font-sansCond uppercase tracking-letterSpacing2 text-clrLight text-xl">
                <span className="text-clrLight">03 </span>Technology
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
