import styles from './section.module.css';

export default function Section(props){
  return(
    <section className={styles.section}>
      <h2 className={styles.title}>{props.name}</h2>
      <p className={styles.paragraph}>{props.txt}</p>
    </section>
  );
}