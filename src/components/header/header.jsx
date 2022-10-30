import React from "react";
import styles from "./header.module.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <NavLink className={styles.navlink} to="/profile">
          <div className={styles.logo}>
            <img className={styles.image} src={logo} alt="meetmax logo" />
            <span className={styles.title}>Meetmax</span>
          </div>
        </NavLink>
        <div className={styles.search}>
          <input className={styles.searchInput} placeholder="Search for something here..." />
        </div>
      </div>
      <div className={styles.user}>
        <span className={styles.userName}>Valentin Kulakov</span>
        <img className={styles.userAvatar} src={avatar} alt="user avatar" />
      </div>
    </div>
  );
};

export default Header;
