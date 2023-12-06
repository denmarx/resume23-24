import styles from './Contact.module.css';
import useRevealOnScroll from '../utils/js/useRevealOnScroll';

const Contact = () => {
  const addRef = useRevealOnScroll();
  return (
    <section id='contact' className={styles.contactWrapper} ref={addRef(0.5)}>
      <h2 className={styles.numberedHeading}>Contact Me</h2>
      <h2 className={styles.title}>Get in Touch</h2>
      <p>
        If you find that my expertise aligns with your requirements, I'm currently available for new job opportunities.
        I'm keen to bring my skills and passion to your next technology project.
      </p>
      <a className={styles.emailLink} href='mailto:dennis.marx93@gmail.com' rel='noopener noreferrer' target='_blank'>
        Reach Out
      </a>
    </section>
  );
};

export default Contact;
