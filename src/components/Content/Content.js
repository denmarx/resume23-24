import stylesAnimation from '../utils/animations/animations.module.css';
import styles from '../Content/Content.module.css';
import useTitleScrollAnimation from '../utils/js/useTitleScrollAnimation';

const Content = () => {
  const transformValue = useTitleScrollAnimation();
  return (
    <div className={styles.titleContainer} style={{ transform: `translateY(${transformValue}px)` }}>
      <h1 className={`${styles.title} ${stylesAnimation.fadeInTitle}`}>Hi, I am Dennis</h1>
      <br></br>
      <h1 className={`${styles.title} ${stylesAnimation.fadeInTitle}`}>Marx</h1>
      <section className={` ${stylesAnimation.imageReveal} `}></section>
    </div>
  );
};

export default Content;
