import React from "react";
import styles from "./new-post.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import avatar from "../../images/avatar.jpg"

import video from '../../images/icons/new-post/video.svg'
import photo from '../../images/icons/new-post/photo.svg'
import feeling from '../../images/icons/new-post/feeling.svg'

const NewPost = () => {
    return (
        <div className={styles.wrapper}>
            <Form className={styles.form}>
                <Form.Group className={styles.inputGroup}>
                    <img src={avatar} alt="avatar" className={styles.avatar}/>
                    <Form.Control type="text" placeholder="Whats's happening?" className={styles.input}/>
                </Form.Group>
                <Form.Group className={styles.inputGroup}>
                    <div className={styles.contentBtns}>
                        <Button variant="outline-secondary" className={styles.contentBtn}>
                            <img src={video} alt="live video" className={styles.ico}/>
                            Live Video
                        </Button>
                        <Button variant="outline-secondary" className={styles.contentBtn}>
                            <img src={photo} alt="live video" className={styles.ico}/>
                            Photo/Video
                        </Button>
                        <Button variant="outline-secondary" className={styles.contentBtn}>
                            <img src={feeling} alt="feeling" className={styles.ico}/>
                            Feeling
                        </Button>
                    </div>
                    <Button variant="primary" type="submit" className="primaryBtn">
                        Post
                    </Button>
                </Form.Group>
            </Form>
        </div>
        
    )
}

export default NewPost;