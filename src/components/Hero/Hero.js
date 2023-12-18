import stylesAnimation from '../utils/animations/animations.module.css';
import styles from '../Hero/Hero.module.css';
import useTitleScrollAnimation from '../utils/js/useTitleScrollAnimation';

const Hero = () => {
  const transformValue = useTitleScrollAnimation();
  return (
    <>
      <section className={styles.titleContainer}>
        <div
          className={`${styles.title} ${stylesAnimation.fadeInTitle} ${stylesAnimation.fadeInTitle1}`}
          style={{ transform: `translateY(${transformValue}px) ` }}
        >
          <h1>Hello, my name is</h1>
        </div>
        <div
          className={`${styles.title} ${stylesAnimation.fadeInTitle} ${stylesAnimation.fadeInTitle2}`}
          style={{ transform: `translateY(${transformValue}px) ` }}
        >
          <h2>Dennis Marx.</h2>
        </div>
        <div
          className={`${styles.title} ${stylesAnimation.fadeInTitle} ${stylesAnimation.fadeInTitle3}`}
          style={{ transform: `translateY(${transformValue}px) ` }}
        >
          <h3>I create digital web experiences.</h3>
        </div>
        <div
          className={`${styles.title} ${stylesAnimation.fadeInTitle} ${stylesAnimation.fadeInParagraph}`}
          style={{ transform: `translateY(${transformValue}px) ` }}
        >
          <p>
            I'm a software engineer and web developer passionate about creating engaging digital experiences. I'm eager
            to join a forward-thinking team to contribute to impactful projects and grow in web development.
          </p>
        </div>
        {/* <section className={` ${stylesAnimation.imageReveal} ${styles.titleImage} `}></section> */}
      </section>
    </>
  );
};

export default Hero;
