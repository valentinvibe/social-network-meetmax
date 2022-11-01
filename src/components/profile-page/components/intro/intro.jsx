import styles from "./intro.module.css";

import planet from "../../../../images/icons/profile-intro/planet.svg";
import profile from "../../../../images/menu-icons/profile.svg";
import birthday from "../../../../images/icons/profile-intro/birthday.svg";
import location from "../../../../images/icons/profile-intro/location.svg";
import vk from "../../../../images/icons/profile-intro/vk.svg";
import fb from "../../../../images/icons/profile-intro/fb.svg";
import instagram from "../../../../images/icons/profile-intro/instagram.svg";

import { Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>intro</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <img className={styles.ico} src={planet} alt="website" />
          uihut.com
        </li>
        <li className={styles.listItem}>
          <img className={styles.ico} src={profile} alt="profile" />
          Male
        </li>
        <li className={styles.listItem}>
          <img className={styles.ico} src={birthday} alt="birthday" />
          Born May 5, 1989
        </li>
        <li className={styles.listItem}>
          <img className={styles.ico} src={location} alt="location" />
          Russia, Moscow
        </li>
        <li className={styles.listItem}>
          <img className={styles.ico} src={vk} alt="vk" />
          <a href="/">valentin</a>
        </li>
        <li className={styles.listItem}>
          <img className={styles.ico} src={fb} alt="fb" />
          <a href="/">valentin</a>
        </li>
        <li className={styles.listItem}>
          <img className={styles.ico} src={instagram} alt="instagram" />
          <a href="/">@valentin</a>
        </li>
        <li className={styles.listItem}>58,975 Followers</li>
        <li className={styles.listItem}>2,564 Following</li>
      </ul>
      {/* <Button variant="secondary">Edit Details</Button> */}
      <Button className={styles.editBtn} variant="light">Edit Details</Button>
      {/* <button className={styles.editBtn} type="button">
        Edit Details
      </button> */}
    </div>
  );
};

export default Intro;
