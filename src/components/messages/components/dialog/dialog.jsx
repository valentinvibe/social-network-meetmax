import React, {useRef} from "react";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";
import Message from "../message/message";
import styles from "./dialog.module.css";
import Form from 'react-bootstrap/Form';
import send from '../../../../images/icons/send.svg';
import avatar from "../../../../images/avatar.jpg";
import { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';

import { SEND_MESSAGE } from "../../../../services/actions/messages";

const Dialog = () => {
  const user = useSelector((store) => store.users.users)
  const dispatch = useDispatch();
  const {id} = useParams();
  const messagesArray = useSelector((store) => store.messages.messagesArray);
  const chat = messagesArray[id-1];

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value !== '') {
      const newMessage = {
        isOwner: true,
        text: inputRef.current.value,
        timeStamp: new Date()
      };
      inputRef.current.value = '';

      dispatch({
        type: SEND_MESSAGE,
        payload: newMessage
      })
    } else {
      return
    }
    
  }

  useEffect(()=> {

  }, [chat])
  
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
        <Form.Control ref={inputRef} className={styles.input} placeholder="Type something here..." />
        <button type="submit"  onClick={handleSubmit} className={styles.addComment}>
          <img src={send} alt="post" className={styles.postImg}/>
        </button>
      </Form>
    </div>
  );
};

export default Dialog;
