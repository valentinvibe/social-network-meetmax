import React from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <p>navigation bar</p>
      <ul>
        <li>
          <NavLink to="/feed" activeClassName={styles.linkActive}>Feed</NavLink>
        </li>
        <li>
          <NavLink to="/community" activeClassName={styles.linkActive}>My community</NavLink>
        </li>
        <li>
          <NavLink to="/messages" activeClassName={styles.linkActive}>Messages</NavLink>
        </li>
        <li>
          <NavLink to="/notification" activeClassName={styles.linkActive}>Notification</NavLink>
        </li>
        <li>
          <NavLink to="/explore" activeClassName={styles.linkActive}>Explore</NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName={styles.linkActive}>Profile</NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName={styles.linkActive}>Settings</NavLink>
        </li>
        <li>
          <NavLink to="/logout" activeClassName={styles.linkActive}>Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
