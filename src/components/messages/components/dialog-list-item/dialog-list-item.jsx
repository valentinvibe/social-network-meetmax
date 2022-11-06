import React from "react";
import styles from "./dialog-list-item.module.css";
import { NavLink } from "react-router-dom";
import avatar from "../../../../images/avatar.jpg";

const DialogListItem = ({ username, id, messagesArray }) => {
  return (
    <li className={styles.dialogItem}>
      <NavLink
        className={styles.dialogItemLink}
        to={`/messages/${id}`}
        activeClassName={styles.active}
      >
        <div className={styles.wrapper}>
          <div className={styles.detailsDialog}>
            <img src={avatar} alt={`${username}`} className={styles.avatar} />
            <div>
              <p
                className={`${styles.paragraph} ${styles.username}`}
              >{`${username}`}</p>
              <p className={`${styles.paragraph} ${styles.lastMessage}`}>
                {`${messagesArray[id - 1].messages[
                  messagesArray[id - 1].messages.length - 1].text}`}
              </p>
            </div>
          </div>

          <div className={styles.info}>
            <p className={`${styles.paragraph} ${styles.timeMessage}`}>{`${
              messagesArray[id - 1].messages[
                messagesArray[id - 1].messages.length - 1
              ].timeStamp
            }`}</p>
            <span className={styles.countNotify}>15</span>
          </div>
        </div>
      </NavLink>
    </li>
  );
};

export default DialogListItem;
