import Button from './Button/Button';
import styles from './header.module.css';

export default function Header(){
  return(
    <header className={`${styles['header-wrap']}`}>
        <div className="img-wrap">
          <img src="src/assets/img/photo.jpg" alt='photo' className={styles.photo}/>
        </div>
        <h1 className={styles.header}>Elena Kharsova</h1>
        <h2 className={styles.title}>Frontend Developer</h2>
        <p className={styles.paragraph}><a href='https://www.webimpact.it.com/'>webimpact.it.com</a></p>
        <div className={styles['header__buttons-wrap']}>
          <Button text='Email'/>
          <Button text='LinkedIn'/>
        </div>
      </header>
  );
}