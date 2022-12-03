import styles from './recomended.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import avatar from '../../../../images/avatar.jpg';

import planet from '../../../../images/icons/profile-intro/planet.svg';
import facebook from '../../../../images/icons/profile-intro/fb.svg';
import vk from '../../../../images/icons/profile-intro/vk.svg';
import instagram from '../../../../images/icons/profile-intro/instagram.svg';

const Recomended = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p className={styles.headerTitle}>You Might Like</p>
                <Link className={styles.headerLink} to="/">
                    See All
                </Link>
            </div>
            <div className={styles.content}>
                <img src={avatar}  alt="user avatar" className={styles.contentAvatar}/>
                <div className={styles.contentContainer}>
                    <p className={`${styles.paragraph} ${styles.title}`}>Radovan SkillArena</p>
                    <p className={`${styles.paragraph} ${styles.subtitle}`}>Founder & CEO at Trophy</p>
                    <div className={styles.social}>
                        <Link to="/">
                          <img className={styles.socialIcon} src={planet} alt=""/>
                        </Link>
                        <Link to="/">
                          <img className={styles.socialIcon} src={facebook} alt=""/>
                        </Link>
                        <Link to="/">
                          <img className={styles.socialIcon} src={vk} alt=""/>
                        </Link>
                        <Link to="/">
                          <img className={styles.socialIcon} src={instagram} alt=""/>
                        </Link> 
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Button variant="outline-secondary">Ignore</Button>
                <Button variant="primary">Follow</Button>
            </div>
        </div>
    )
}

export default Recomended