import stylesAnimation from '../utils/animations/animations.module.css';
import styles from '../Hero/Hero.module.css';
import useTitleScrollAnimation from '../utils/js/useTitleScrollAnimation';

const Hero = () => {
  const transformValue = useTitleScrollAnimation();
  return (
    <>
      <section className={styles.titleContainer}>
        <div
          className={`${styles.title} ${stylesAnimation.fadeInTitle} ${stylesAnimation.fadeInTitle2}`}
          style={{ transform: `translateY(${transformValue}px) ` }}
        >
          <h2>Academic Clarity & AI-Literacy for High-School Students</h2>
        </div>
        <div
          className={`${styles.title} ${stylesAnimation.fadeInTitle} ${stylesAnimation.fadeInTitle3}`}
          style={{ transform: `translateY(${transformValue}px) ` }}
        >
          <h3>I help students learn to read deeply, think clearly, write with confidence, and use AI responsibly — through a structured 8-week program called <span style={{ fontStyle: "italic", color: "var(--green)" }}>The Clarity Engine.</span></h3>
        </div>
        <div
          className={`${styles.title} ${stylesAnimation.fadeInTitle} ${stylesAnimation.fadeInParagraph}`}
          style={{ transform: `translateY(${transformValue}px) ` }}
        >
          <div className={styles.ctaRow}>
            <a href="/clarity-engine" className={styles.primaryButton}>
              Learn More About the Program
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
