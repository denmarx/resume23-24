import stylesAnimation from '../utils/animations/animations.module.css';
import styles from '../Content/Content.module.css';

const Content = () => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Dennis</h1>
      <br></br>
      <h1 className={styles.title}>Marx</h1>
      <section className={`${styles.image} ${stylesAnimation.imageReveal}`}></section>
    </div>
  );
  // return <img src={HeaderImg} className={`${stylesAnimation.imageReveal} ${styles.image}`} alt='HeaderImg' />;
};

export default Content;
