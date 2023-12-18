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
              I'm Dennis, a software engineer with a background in science. I specialize in building dynamic, intuitive
              digital products, with an approach that leverages precision, creativity and user experience.
            </p>
            <p>
              If you're looking for a reliable and technically proficient developer to bring your projects to life,
              let's connect! I'm excited to discuss how my skills and experience can contribute to the success of your
              next project.
            </p>
            <p className={styles.skillsListParagraph} ref={addRef(0.8)}>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className={styles.skillsList} ref={addRef(1)}>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Matter.js</li>
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
