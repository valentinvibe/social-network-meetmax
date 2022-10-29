import React from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.navList}>
        <li className={styles.linkWrapper}>
          <NavLink className={styles.navLink} to="/feed" activeClassName={styles.linkActive}>Feed</NavLink>
        </li>
        <li className={styles.linkWrapper}>
          <NavLink className={styles.navLink} to="/community" activeClassName={styles.linkActive}>My community</NavLink>
        </li>
        <li className={styles.linkWrapper}>
          <NavLink className={styles.navLink} to="/messages" activeClassName={styles.linkActive}>Messages</NavLink>
        </li>
        <li className={styles.linkWrapper}>
          <NavLink className={styles.navLink} to="/notification" activeClassName={styles.linkActive}>Notification</NavLink>
        </li>
        <li className={styles.linkWrapper}>
          <NavLink className={styles.navLink} to="/explore" activeClassName={styles.linkActive}>Explore</NavLink>
        </li>
        <li className={styles.linkWrapper}>
          <NavLink className={styles.navLink} to="/profile" activeClassName={styles.linkActive}>Profile</NavLink>
        </li>
        <li className={styles.linkWrapper}>
          <NavLink className={styles.navLink} to="/settings" activeClassName={styles.linkActive}>Settings</NavLink>
        </li>
        <li className={styles.linkWrapper}>
          <NavLink className={styles.navLink} to="/logout" activeClassName={styles.linkActive}>Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
