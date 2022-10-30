import React from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import feed from '../../images/menu-icons/feed.svg';
import groups from '../../images/menu-icons/groups.svg';
import chats from '../../images/menu-icons/chats.svg';
import notification from '../../images/menu-icons/notification.svg';
import explore from '../../images/menu-icons/explore.svg';
import profile from '../../images/menu-icons/profile.svg';
import settings from '../../images/menu-icons/settings.svg';
import logout from '../../images/menu-icons/logout.svg';

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.navList}>
        <li className={styles.linkWrapper}>
          <NavLink className={styles.navLink} to="/feed" activeClassName={styles.linkActive}>
            <img className={styles.navIcon} src={feed} alt="feed" />
            Новости
          </NavLink>
        </li>
        <li className={styles.linkWrapper}>
          <NavLink
            className={styles.navLink}
            to="/community"
            activeClassName={styles.linkActive}
          >
            <img className={styles.navIcon} src={groups} alt="groups" />
            Мои группы
          </NavLink>
        </li>
        <li className={styles.linkWrapper}>
          <NavLink
            className={styles.navLink}
            to="/messages"
            activeClassName={styles.linkActive}
          >
            <img className={styles.navIcon} src={chats} alt="chats" />
            Сообщения
          </NavLink>
        </li>
        <li className={styles.linkWrapper}>
          <NavLink
            className={styles.navLink}
            to="/notification"
            activeClassName={styles.linkActive}
          >
            <img className={styles.navIcon} src={notification} alt="notification" />
            Уведомления
          </NavLink>
        </li>
        <li className={styles.linkWrapper}>
          <NavLink
            className={styles.navLink}
            to="/explore"
            activeClassName={styles.linkActive}
          >
            <img className={styles.navIcon} src={explore} alt="explore" />
            Explore
          </NavLink>
        </li>
        <li className={styles.linkWrapper}>
          <NavLink
            className={styles.navLink}
            to="/profile"
            activeClassName={styles.linkActive}
          >
            
            <img className={styles.navIcon} src={profile} alt="profile" />
            Профиль
          </NavLink>
        </li>
        <li className={styles.linkWrapper}>
          <NavLink
            className={styles.navLink}
            to="/settings"
            activeClassName={styles.linkActive}
          >
            <img className={styles.navIcon} src={settings} alt="settings" />
            Настройки
          </NavLink>
        </li>
        <li className={styles.linkWrapper}>
          <NavLink
            className={styles.navLink}
            to="/logout"
            activeClassName={styles.linkActive}
          >
            <img className={styles.navIcon} src={logout} alt="logout" />
            Выйти
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
