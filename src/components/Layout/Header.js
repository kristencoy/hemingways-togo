import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import barLightsImg from "../../assets/bar-lights.jpeg";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>HEMINGWAY'S</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={barLightsImg} alt="Bar lights" />
      </div>
    </>
  );
}

export default Header;
