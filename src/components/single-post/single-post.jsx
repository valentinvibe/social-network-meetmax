import React from "react";
import styles from "./single-post.module.css";
import Button from "react-bootstrap/Button";
import avatar from "../../images/avatar.jpg";

const SinglePost = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.about}>
          <img src={avatar} alt="avatar" className={styles.avatar} />
          <div className={styles.description}>
            <p className={`${styles.paragraph} ${styles.userName}`}>
              Valentin Kulakov
            </p>
            <p className={`${styles.paragraph} ${styles.postDate}`}>Just Now</p>
          </div>
        </div>
        <Button variant="outline-secondary" className={styles.moreBtn}>
          ...
        </Button>
      </div>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione et
          voluptatem earum assumenda officiis quod ut maiores neque nihil, ad
          nam. Sed voluptatibus ea autem, laudantium veniam impedit doloribus
          aut.
        </p>
      </div>

      <div className={styles.reaction}>
        <Button
          size="sm"
          variant="outline-primary"
          className={styles.reactionBtn}
        >
          {/* <img src={} alt="live video" className={styles.ico} /> */}
          Like
        </Button>
        <Button
          size="sm"
          variant="outline-secondary"
          className={styles.reactionBtn}
        >
          {/* <img src={} alt="live video" className={styles.ico} /> */}
          Comments
        </Button>
        <Button
          size="sm"
          variant="outline-secondary"
          className={styles.reactionBtn}
        >
          {/* <img src={} alt="live video" className={styles.ico} /> */}
          Share
        </Button>
      </div>
    </div>
  );
};

export default SinglePost;
