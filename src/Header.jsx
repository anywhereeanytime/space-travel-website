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
    /* PHONE */
    <header className="h-screen relative">
      <nav className="md:hidden flex justify-between items-center p-6 ">
        {/* Logo */}
        <div className="h-10 w-10">
          <img src={logo} alt="space tourism logo" />
        </div>
        {/* Burger */}
        <button
          className={`block transition-opacity duration-500 ${
            isMenuOpen ? "opacity-0" : "opacity-100 delay-300"
          }`}
          onClick={toggleMenu}
        >
          <img src={iconBurger} alt="menu icon" className="h-8 w-8" />
        </button>
      </nav>

      {/* Menu */}
      <div
        className={`md:hidden flex flex-col fixed top-0 right-0 h-screen w-2/3 bg-clrWhite/5 backdrop-blur-sm transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-700 ease-in-out`}
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
      {/* PHONE */}

      {/* TABLET SCREENS */}
      <nav className="hidden lg:hidden md:flex justify-between items-center relative">
        {/* Logo */}
        <div className="h-14 w-14 m-6">
          <img src={logo} alt="space tourism logo" />
        </div>
        {/* Logo */}

        {/* Menu */}
        <div className=" bg-clrWhite/5 backdrop-blur-sm absolute top-0 right-0">
          <ul className="flex gap-8 p-8">
            <li className="group">
              <a className="font-sansCond font-light uppercase tracking-letterSpacing2 text-clrLight text-fs450 group-hover:border-b-2 group-hover:border-clrLight pb-8 cursor-pointer">
                Home
              </a>
            </li>
            <li className="group">
              <a className="font-sansCond font-light uppercase tracking-letterSpacing2 text-clrLight text-fs450 group-hover:border-b-2 group-hover:border-clrLight pb-8 cursor-pointer">
                Destination
              </a>
            </li>
            <li className="group">
              <a className="font-sansCond font-light uppercase tracking-letterSpacing2 text-clrLight text-fs450 group-hover:border-b-2 group-hover:border-clrLight pb-8 cursor-pointer">
                Crew
              </a>
            </li>
            <li className="group">
              <a className="font-sansCond font-light uppercase tracking-letterSpacing2 text-clrLight text-fs450 group-hover:border-b-2 group-hover:border-clrLight pb-8 cursor-pointer">
                Technology
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Menu */}
      {/* TABLET SCREENS */}

      {/* DESKTOP SCREENS */}
      <nav className="hidden lg:flex justify-between items-center relative">
        {/* Logo */}
        <div className="h-14 w-14 m-12">
          <img src={logo} alt="space tourism logo" />
        </div>
        {/* Logo */}

        {/* Menu */}
        <div className=" bg-clrWhite/5 backdrop-blur-sm absolute top-6 right-0">
          <ul className="flex gap-12 p-8">
            <li className="group">
              <a className="font-sansCond font-light uppercase tracking-letterSpacing2 text-clrWhite text-xl text-md group-hover:border-b-2 group-hover:border-clrLight pb-8 cursor-pointer">
                <span className="text-clrWhite font-normal">00 </span> Home
              </a>
            </li>
            <li className="group">
              <a className="font-sansCond font-light uppercase tracking-letterSpacing2 text-clrWhite text-xl text-md group-hover:border-b-2 group-hover:border-clrLight pb-8 cursor-pointer">
                <span className="text-clrWhite font-normal">01 </span>{" "}
                Destination
              </a>
            </li>
            <li className="group">
              <a className="font-sansCond font-light uppercase tracking-letterSpacing2 text-clrWhite text-xl group-hover:border-b-2 group-hover:border-clrLight pb-8 cursor-pointer">
                <span className="text-clrWhite font-normal">02 </span> Crew
              </a>
            </li>
            <li className="group">
              <a className="font-sansCond font-light uppercase tracking-letterSpacing2 text-clrWhite text-xl group-hover:border-b-2 group-hover:border-clrLight pb-8 cursor-pointer">
                <span className="text-clrWhite font-normal">03 </span>{" "}
                Technology
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* DESKTOP SCREENS */}
    </header>
  );
};

export default Header;
