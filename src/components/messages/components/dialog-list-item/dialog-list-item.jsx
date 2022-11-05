import React from "react";
import styles from "./dialog-list-item.module.css";
import { NavLink } from "react-router-dom";
import avatar from "../../../../images/avatar.jpg";

const DialogListItem = ({username, id}) => {
  return (
    <li className={styles.dialogItem}>
      <NavLink className={styles.dialogItemLink} to={`/messages/${id}`} activeClassName={styles.active}>
        <div className={styles.wrapper}>
          <div className={styles.detailsDialog}>
            <img src={avatar} alt={`${username}`} className={styles.avatar}/>
            <div>
              <p className={`${styles.paragraph} ${styles.username}`}>{`${username}`}</p>
              <p className={`${styles.paragraph} ${styles.lastMessage}`}>lorem sfjdb sdjfb sdfj bsdfsdf ksd fsdf sdf dfsd sdf sdf sdf sdf sdf sdf sdf  </p>
          </div>
          </div>
          
          <div className={styles.info}>
          <p className={`${styles.paragraph} ${styles.timeMessage}`}>11:26 am</p>
          <span className={styles.countNotify}>15</span>
          </div>
        </div>
      </NavLink>
    </li>
  );
};

export default DialogListItem
