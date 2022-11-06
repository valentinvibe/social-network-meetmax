import React from "react";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";
import Message from "../message/message";
import styles from "./dialog.module.css";
import Form from 'react-bootstrap/Form';
import send from '../../../../images/icons/send.svg';
import avatar from "../../../../images/avatar.jpg";

const Dialog = ({messagesArray, user}) => {
  const {id} = useParams();
  const chat = messagesArray[id-1];
  
  return (
    <div className={styles.dialog}>
      <div className={styles.dialogHeader}>
        <div className={styles.dialogInfo}>
          <img className={styles.avatar} src={avatar} alt="avatar"/>
          <div className={styles.userInfo}>
            <p className={styles.userName}>{`${user[`${id-1}`].name}`}</p>
            <div className={styles.status}>
              <span className={styles.online}>Active now</span>
              <div className={styles.statusPoint}></div>
            </div>
          </div>
        </div>

        <div className={styles.dialogActionds}>
          <button type="button" className={`${styles.actionsBtn} ${styles.call}`}></button>
          <button type="button" className={`${styles.actionsBtn} ${styles.videocall}`}></button>
          <button type="button" className={`${styles.actionsBtn} ${styles.info}`}></button>
        </div>
        
      </div>

      <div className={styles.messagesList}>
        { chat ? chat.messages.map((message) => <Message key={uuid()} message={message}/>) : null}
      </div>

      <Form className={styles.formComment}>
        <Form.Control className={styles.input} placeholder="Type something here..." />
        <button type="submit" className={styles.addComment}>
          <img src={send} alt="post" className={styles.postImg}/>
        </button>
      </Form>
    </div>
  );
};

export default Dialog;
