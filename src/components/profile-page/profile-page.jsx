import styles from './profile-page.module.css';
import ava from '../../images/avatar.jpg';

const Profile = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerImage}>
              
                </div>
                
                <div className={styles.about}>
                    <div className={styles.avatar}>
                        <img className={styles.profileAvatar} src={ava} alt='avatar'/>
                        <p className={styles.paragraph}>Name Surname</p>
                        <p className={styles.paragraph}>Frontend Developer</p>
                    </div>
                    <div className={styles.edit}>
                        <img className={styles.ico} src="" alt="" />
                        <button type='button' className={styles.editBtn}>Edit basic info</button>
                    </div>
                </div>
            </div>
            <div className={styles.content}>

            </div>
        </div>
    );
}

export default Profile;