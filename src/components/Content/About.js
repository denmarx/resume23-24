import styles from './About.module.css';
import shot from '../../assets/shot_cut.webp';
import useRevealOnScroll from '../utils/js/useRevealOnScroll';

const About = () => {
  const addRef = useRevealOnScroll();
  return (
    <section id='aboutSection' className={styles.aboutWrapper}>
      <h2 className={styles.aboutMeHead} ref={addRef(0.3)}>
        About Me
      </h2>
      <div className={styles.inner}>
        <div className={styles.aboutMeInfo} ref={addRef(0.5)}>
          <div>
            <p>
              I'm Dennis Marx, a science educator and creator of The Clarity Engine. I'm passionate about helping students develop the thinking, reading, and writing skills they need to succeed independently.
            </p>
            <ul className={styles.credentialsList} ref={addRef(0.7)}>
              <li><strong>Science & Chemistry Teacher</strong> in Vancouver, BC</li>
              <li><strong>MSc in Biochemistry & Molecular Biology</strong></li>
              <li><strong>8+ years</strong> designing learning systems and educational tools</li>
              <li><strong>Creator of The Clarity Engine</strong> — an academic clarity & AI-literacy program</li>
            </ul>
            <p>
              My approach combines academic rigor with practical, hands-on learning. I believe that clarity of thinking comes from clear reading, structured reasoning, and deliberate practice—with AI as a learning partner, not a shortcut.
            </p>

          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={shot} alt='Dennis Marx' ref={addRef(0.5)}></img>
        </div>
      </div>
    </section>
  );
};

export default About;
