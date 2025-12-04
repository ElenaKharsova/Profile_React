import styles from './button.module.css';

export default function Button(props) {
  return(
    <div className={`${styles.button} ${styles[props.color]} ?? ''`}>
      <a href={props.link}>
        <div className={styles['link-wrap']}>
          <svg width="16px" height="16px" viewBox="0 0 16 16" arria-hidden="true" focusable="false">
            {props.path}
          </svg>
        {props.text}
        </div>
      </a>
    </div>
  );  
}