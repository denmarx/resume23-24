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
            I'm a web developer with a passion for crafting engaging and efficient digital experiences. At present, I'm
            dedicated to developing accessible, user-centric websites, leveraging my skills in HTML, CSS, JavaScript,
            and a growing proficiency in frameworks like React.<br></br> I am keen on joining a forward-thinking team
            where I can contribute to impactful projects and continue my professional growth in the dynamic field of web
            development.
          </p>
        </div>
        {/* <section className={` ${stylesAnimation.imageReveal} ${styles.titleImage} `}></section> */}
      </section>
    </>
  );
};

export default Hero;
