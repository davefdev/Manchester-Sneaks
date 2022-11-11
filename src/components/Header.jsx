import React from "react";
import css from "./Header.module.css";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>Manc Sneaks</span>
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>Eng</li>
          </ul>
        </div>

        <input type="text" className={css.search} />

        <CgShoppingBag className={css.cart}/>
      </div>
    </div>
  );
};

export default Header;
