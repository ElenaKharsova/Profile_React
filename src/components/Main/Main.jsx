import Section from './Section/Section.jsx';
import styles from './main.module.css';

export default function Main(){
    const aboutTxt = 'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.';
    const interestsTxt = 'Board games. Hiking. Handmade crafts. Traveling. Music. Movies. Technology. Ping pong. Chatting about almost anything. And generally a positive person in life :)';
    
    return(
      <main className={`main ${styles['main-wrap']}`}>
        <Section name='About' txt = {aboutTxt}/>
        <Section name='Interests' txt={interestsTxt}/>
      </main>
    );
}