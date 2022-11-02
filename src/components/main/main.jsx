import React from "react";
import Profile from "../profile-page/profile-page";
import styles from "./main.module.css";
import { Switch, Route } from "react-router-dom";
import Messages from "../messages/messages";

const Main = (props) => {
  return (
    <div className={styles.wrapper}>
      <Switch>
        <Route exact={true} path="/profile">
          <Profile />
        </Route>
        <Route path="/messages">
          <Messages userList={props.userList}/>
        </Route>
        <Route exact={true} path="/">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
