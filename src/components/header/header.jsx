import React from "react";
import styles from "./header.module.css";
import logo from "../../logo.svg";
import avatar from "../../images/avatar.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <NavLink to="/">
          <div className={styles.logo}>
            <img className={styles.image} src={logo} alt="meetmax logo" />
            <span className={styles.title}>MeetMax</span>
          </div>
        </NavLink>
        <div className={styles.search}>
          <input className={styles.searchInput} placeholder="Search..." />
          <button type="button">Search</button>
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
