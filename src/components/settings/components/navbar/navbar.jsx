import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import icon from '../../../../images/icons/phone.svg';

const Navbar = () => {
    return (
      <div className={styles.wrapper}>
        <ul className={styles.navList}>
          <li className={styles.linkWrapper}>
            <NavLink className={styles.navLink} to="#" activeClassName={styles.linkActive}>
              <img className={styles.navIcon} src={icon} alt="feed" />
              Редактировать профиль
              <img className={styles.navIconActive} src={icon} alt="feed" />
            </NavLink>
          </li>
          <li className={styles.linkWrapper}>
            <NavLink
              className={styles.navLink}
              to="#"
              activeClassName={styles.linkActive}
            >
              <img className={styles.navIcon} src={icon} alt="groups" />
              Язык
              <img className={styles.navIconActive} src={icon} alt="feed" />
            </NavLink>
          </li>
          <li className={styles.linkWrapper}>
            <NavLink
              className={styles.navLink}
              to="#"
              activeClassName={styles.linkActive}
            >
              <img className={styles.navIcon} src={icon} alt="chats" />
              Заблокированные
              <img className={styles.navIconActive} src={icon} alt="feed" />
            </NavLink>
          </li>
          <li className={styles.linkWrapper}>
            <NavLink
              className={styles.navLink}
              to="#"
              activeClassName={styles.linkActive}
            >
              <img className={styles.navIcon} src={icon} alt="notification" />
              Уведомления
              <img className={styles.navIconActive} src={icon} alt="feed" />
            </NavLink>
          </li>
          <li className={styles.linkWrapper}>
            <NavLink
              className={styles.navLink}
              to="#"
              activeClassName={styles.linkActive}
            >
              <img className={styles.navIcon} src={icon} alt="explore" />
              Пароли и Безопастность
              <img className={styles.navIconActive} src={icon} alt="feed" />
            </NavLink>
          </li>
          <li className={styles.linkWrapper}>
            <NavLink
              className={styles.navLink}
              to="#"
              activeClassName={styles.linkActive}
            >
              
              <img className={styles.navIcon} src={icon} alt="profile" />
              Активный лог
              <img className={styles.navIconActive} src={icon} alt="feed" />
            </NavLink>
          </li>
          <li className={styles.linkWrapper}>
            <NavLink
              className={styles.navLink}
              to="#"
              activeClassName={styles.linkActive}
            >
              <img className={styles.navIcon} src={icon} alt="settings" />
              Приватность
              <img className={styles.navIconActive} src={icon} alt="feed" />
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Navbar;