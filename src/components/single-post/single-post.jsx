import React, { useState } from "react";
import styles from "./single-post.module.css";
import Button from "react-bootstrap/Button";
import avatar from "../../images/avatar.jpg";
import notlike from "../../images/icons/notlike.svg";
import comment from "../../images/icons/comment.svg";
import share from "../../images/icons/share.svg";
import likeBlue from "../../images/icons/like-blue.svg";
import send from "../../images/icons/send.svg";

import Form from 'react-bootstrap/Form';


const SinglePost = () => {
  const [isLike, setLike] = useState(true);

  const handleLike = () => {
     return isLike ? setLike(false) : setLike(true)
  }

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
        {isLike ? (
        <Button
          size="sm"
          variant="outline-primary"
          className={styles.reactionBtn}
          onClick={handleLike}
        >
          <img src={likeBlue} alt="live video" className={styles.ico} />
          Like
        </Button>
        ) : (
          <Button
          size="sm"
          variant="outline-secondary"
          className={styles.reactionBtn}
          onClick={handleLike}
        >
          <img src={notlike} alt="live video" className={styles.ico} />
          Like
          </Button>
          )}
        <Button
          size="sm"
          variant="outline-secondary"
          className={styles.reactionBtn}
        >
          <img src={comment} alt="live video" className={styles.ico} />
          Comments
        </Button>
        <Button
          size="sm"
          variant="outline-secondary"
          className={styles.reactionBtn}
        >
          <img src={share} alt="live video" className={styles.ico} />
          Share
        </Button>
      </div>

      <Form className={styles.formComment}>
        <img src={avatar} className={styles.commentAvatar} alt="avatar"/>
        <Form.Control className={styles.input} placeholder="Write a comment..." />
        <button type="submit" className={styles.addComment}>
          <img src={send} alt="post" className={styles.postImg}/>
        </button>
      </Form>
    </div>
  );
};

export default SinglePost;
