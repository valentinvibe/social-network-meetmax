import React from "react";
import styles from "./dialog.module.css";

const Dialog = () => {

  return (
    <div className={styles.dialog}>
      <div className={styles.dialogHeader}>
        <p>Vasya</p>
      </div>
      <div className="messagesList">
        <div className="message">
          <p>
            sdfsdfsfsdfsd fsd sdf sdkfjb sdhbf jsbhdf hsbf jshdfb jshbd jsdhbf
            sjdbf jsd b
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
