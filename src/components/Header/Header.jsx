import Button from './Button/Button';
import photo from '../../assets/img/photo.jpg';
import styles from './header.module.css';

export default function Header(){
  const linkedInPath = (<path d='M13.7143 1.33334H2.28275C1.75894 1.33334 1.33334 1.76489 1.33334 2.29465V13.7054C1.33334 14.2351 1.75894 14.6667 2.28275 14.6667H13.7143C14.2381 14.6667 14.6667 14.2351 14.6667 13.7054V2.29465C14.6667 1.76489 14.2381 1.33334 13.7143 1.33334ZM5.36311 12.7619H3.38691V6.39882H5.36608V12.7619H5.36311ZM4.37501 5.52977C3.74108 5.52977 3.22918 5.01489 3.22918 4.38394C3.22918 3.75299 3.74108 3.23811 4.37501 3.23811C5.00596 3.23811 5.52084 3.75299 5.52084 4.38394C5.52084 5.01787 5.00894 5.52977 4.37501 5.52977ZM12.7708 12.7619H10.7947V9.66668C10.7947 8.92858 10.7798 7.97918 9.76787 7.97918C8.73811 7.97918 8.58037 8.78275 8.58037 9.61311V12.7619H6.60418V6.39882H8.50001V7.26787H8.5268C8.79168 6.76787 9.43751 6.24108 10.3988 6.24108C12.3988 6.24108 12.7708 7.55953 12.7708 9.27382V12.7619Z'/>);
  const mailPath = (<>
    <path d='M1.60241 4.70721L8.00001 7.90561L14.3976 4.70721C14.3739 4.29957 14.1953 3.9164 13.8983 3.63619C13.6012 3.35598 13.2083 3.19994 12.8 3.20001H3.20001C2.79167 3.19994 2.39876 3.35598 2.10175 3.63619C1.80473 3.9164 1.62609 4.29957 1.60241 4.70721Z'/>
    <path d='M14.4 6.49441L8.00001 9.69441L1.60001 6.49441V11.2C1.60001 11.6244 1.76858 12.0313 2.06864 12.3314C2.36869 12.6314 2.77566 12.8 3.20001 12.8H12.8C13.2244 12.8 13.6313 12.6314 13.9314 12.3314C14.2314 12.0313 14.4 11.6244 14.4 11.2V6.49441Z'/>
  </>
  );

  return(
    <header className={`${styles['header-wrap']}`}>
        <div className="img-wrap">
          <img src={photo} alt='photo' className={styles.photo}/>
        </div>
        <h1 className={styles.header}>Elena Kharsova</h1>
        <h2 className={styles.title}>Frontend Developer</h2>
        <p className={styles.paragraph}><a href='https://www.webimpact.it.com/'>webimpact.it.com</a></p>
        <div className={styles['header__buttons-wrap']}>
          <Button text='Email' path={mailPath} color='btn-mail'link='mailto:elena.kharsova@gmail.com'/>
          <Button text='LinkedIn' path={linkedInPath} color='btn-linkedIn' link='https://www.linkedin.com/in/elenakharsova'/>
        </div>
      </header>
  );
}