import React from "react";
import styles from "./dialog-list-item.module.css";
import { NavLink } from "react-router-dom";

const DialogListItem = ({username, id}) => {
  return (
    <li className={styles.dialogItem}>
      <NavLink className={styles.dialogItemLink} to={`/messages/${id}`} activeClassName={styles.active}>
        {username}
      </NavLink>
    </li>
  );
};

export default DialogListItem
