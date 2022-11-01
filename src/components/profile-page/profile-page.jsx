import styles from "./profile-page.module.css";
import ava from "../../images/avatar.jpg";
import eye from "../../images/icons/eye-visible.svg";
import upload from "../../images/icons/upload.svg";
import Intro from "./components/intro/intro";
import NewPost from "../new-post/new-post";

import { Button } from "react-bootstrap";

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerImage}>
          <img className={styles.profileAvatar} src={ava} alt="avatar" />
          <Button className={styles.changeBackground} variant="light">
            <img className={styles.uploadIco} src={upload} alt="upload" />
            Edit Cover Photo
          </Button>
        </div>

        <div className={styles.about}>
          <div className={styles.avatar}>
            <p className={`${styles.paragraph} ${styles.userName}`}>
              Valentin Kulakov
            </p>
            <p className={`${styles.paragraph} ${styles.userAbout}`}>
              Frontend Developer
            </p>
          </div>
          <div className={styles.edit}>
            <img className={styles.ico} src={eye} alt="eye" />
            <Button variant="secondary">Edit basic info</Button>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.sidebar}>
          <Intro />
        </div>
        <div className={styles.mainContent}>
          <NewPost/>
        </div>
        <div className={styles.rightSideBar}>
          <Intro />
        </div>
      </div>
    </div>
  );
};

export default Profile;
