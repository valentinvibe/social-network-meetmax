import React from "react";
import Profile from "../profile-page/profile-page";
import styles from "./main.module.css";
import { Switch, Route } from "react-router-dom";
import Messages from "../messages/messages";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/messages">
        <Messages />
      </Route>
    </div>
  );
};

export default Main;
