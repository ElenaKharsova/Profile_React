import styles from './footer.module.css';

export default function Footer(){
    return(
    <footer className={`${styles.footer} ${styles['footer-wrap']}`}>
      <img src='/src/assets/img/facebook_icon.png' className={styles.icon} alt='icon'/>
      <img src='/src/assets/img/gitHub_icon.png' className={styles.icon} alt='icon'/>
      <img src='/src/assets/img/instagram_icon.png' className={styles.icon} alt='icon'/>
      <img src='/src/assets/img/twitter_icon.png' className={styles.icon} alt='icon'/>
    </footer>
    );
}