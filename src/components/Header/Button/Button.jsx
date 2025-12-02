import styles from './button.module.css';

export default function Button(props) {
  return(
    <button className={styles.button}><span>ico</span>{props.text}</button>
  );  
}