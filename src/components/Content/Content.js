import stylesAnimation from '../utils/animations/animations.module.css';
import styles from '../Content/Content.module.css';

const Content = () => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={`${styles.title} ${stylesAnimation.fadeInTitle}`}>Dennis</h1>
      <br></br>
      <h1 className={`${styles.title} ${stylesAnimation.fadeInTitle}`}>Marx</h1>
      <section className={`${styles.image} ${stylesAnimation.imageReveal}`}></section>
    </div>
  );
};

export default Content;
