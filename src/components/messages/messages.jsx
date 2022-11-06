import React from "react";
import { Route } from "react-router-dom";
import styles from "./messages.module.css";
import DialogListItem from './components/dialog-list-item/dialog-list-item'
import Dialog from "./components/dialog/dialog";
import uuid from 'react-uuid';

const Messages = ({userList, messagesArray}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.dialogs}>
        <div className="searchDialogs">
          <input type="text" className="search" />
          <button type="button" className="favorites">
            Y
          </button>
        </div>
        <ul className={styles.dialogsList}>
          {userList.map(user => 
            <DialogListItem username={`${user.name}`} key={uuid()} id={`${user.id}`} messagesArray={messagesArray}/>
          )}
        </ul>
      </div>
      <Route path='/messages/:id'>
        <Dialog messagesArray={messagesArray} user={userList}/>
      </Route>
    </div>
  );
};

export default Messages;
