import Section from './Section/Section.jsx';
import styles from './main.module.css';

export default function Main(){
    const aboutTxt = 'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.';
    const interestsTxt = 'Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.';
    
    return(
      <main className={`main ${styles['main-wrap']}`}>
        <Section name='About' txt = {aboutTxt}/>
        <Section name='Interests' txt={interestsTxt}/>
      </main>
    );
}