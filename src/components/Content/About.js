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
            <p>Hello there!</p>
            <p>
              I am Dennis, a web and mobile developer with a background in science. I specialize in crafting practical
              and intuitive digital products, blending precision, creativity, and a focus on user experience to deliver
              effective solutions.
            </p>
            <p>
              If you're in need of a dependable developer with solid technical skills to bring your projects to
              fruition, I'm here to help. Let's connect and discuss how my experience can benefit your next project.
            </p>
            <p className={styles.skillsListParagraph} ref={addRef(0.8)}>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className={styles.skillsList} ref={addRef(1)}>
              <li>JavaScript (ES6+)</li>
              <li>Next.js</li>
              <li>React</li>
              <li>React Native</li>
              <li>Node.js</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={shot} alt='Dennis' ref={addRef(0.5)}></img>
        </div>
      </div>
    </section>
  );
};

export default About;
