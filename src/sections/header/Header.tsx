import React, { useContext } from "react";
import HamMenu from "../../assets/images/icon-menu.svg";
import CloseMenu from "../../assets/images/icon-menu-close.svg";
import Logo from "../../assets/images/logo.svg";
import "./Header.scss";
import { Tooggle } from "../../context/toogleContext";
import { menuData } from "../../utils";

export const Header = () => {
  const { active, setActive } = useContext(Tooggle);


  return (
    <header className="header-container">
      <img src={Logo} alt="Logo" />
      <img src={HamMenu} alt="HamMenu" onClick={() => setActive(!active)} />
      {active && (
        <div className="nav-list-container">
          <div className="menu-overlay"></div>
          <div className="menu-list-wrapper">
            <img
              className="menu-close"
              src={CloseMenu}
              alt="CloseMenu"
              onClick={() => setActive(!active)}
            />
            <ul className="menu-list">
              {menuData.map((item) => (
                <li key={item.id} className="menu-item">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};
