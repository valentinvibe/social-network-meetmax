import styles from "./message.module.css";

const Message = ({ message }) => {
  console.log(message);
  return (
    <>
      {message.isOwner ? (
        <div className={styles.ownerMessage}>
          <p className={styles.text}>{message.text}</p>
        </div>
      ) : (
        <div className={styles.incomingMessage}>
          <p className={styles.text}>{message.text}</p>
        </div>
      )}
    </>
  );
};

export default Message;
