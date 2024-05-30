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
    <header className="h-screen p-6">
      <nav className="flex justify-between">
        {/* Logo */}
        <div className="h-9 w-9">
          <img src={logo} alt="space tourism logo" />
        </div>
        {/* Logo */}

        {/* Burger and Menu */}
        <div className="grid grid-rows-[auto_1fr] grid-cols-2 h-screen absolute top-0 right-0 p-6">
          <button
            className="block col-start-2 col-end-3 justify-self-end mb-7"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <img
                src={iconClose}
                alt="close icon"
                className="h-7 w-7 self-center "
              />
            ) : (
              <img src={iconBurger} alt="menu icon" className="h-7 w-7" />
            )}
          </button>
          <ul
            className={`${
              isMenuOpen
                ? "col-span-2 bg-opacity-50 backdrop-blur-sm"
                : "hidden"
            }`}
          >
            <li>
              <a className="font-sansCond uppercase tracking-letterSpacing2 text-clrLight">
                <span className="text-clrLight">00 </span>Home
              </a>
            </li>
            <li>
              <a className="font-sansCond uppercase tracking-letterSpacing2 text-clrLight">
                <span className="text-clrLight">01 </span>Destination
              </a>
            </li>
            <li>
              <a className="font-sansCond uppercase tracking-letterSpacing2 text-clrLight">
                <span className="text-clrLight">02 </span>Crew
              </a>
            </li>
            <li>
              <a className="font-sansCond uppercase tracking-letterSpacing2 text-clrLight">
                <span className="text-clrLight">03 </span>Technology
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Navigation End */}
    </header>
  );
};

export default Header;
