import React from "react";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";
import Message from "../message/message";
import styles from "./dialog.module.css";

const Dialog = ({messagesArray}) => {
  const {id} = useParams();
  const chat = messagesArray[id-1];
  console.log(chat);
  
  return (
    <div className={styles.dialog}>
      <div className={styles.dialogHeader}>
        <p>Vasya</p>
      </div>
      <div className="messagesList">
        { chat ? chat.messages.map((message) => <Message key={uuid()}/>) : null}
      </div>
    </div>
  );
};

export default Dialog;
