import styles from './icon.module.css';

export default function Icon(props){
  return(
    <div className={styles.icon}>
      <a href={props.link}>
        <svg width="25" height="25" viewBox="0 0 25 25" arria-hidden="true" focusable="false">
          <path d={props.path} fill="#918E9B"/>
        </svg>
      </a>
    </div>
  );
}