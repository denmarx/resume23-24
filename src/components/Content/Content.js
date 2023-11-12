import HeaderImg from '../../assets/dev.png';
import stylesAnimation from '../utils/animations/animations.module.css';
import styles from '../Content/Content.module.css';

const Content = () => {
  return <img src={HeaderImg} className={`${stylesAnimation.imageReveal} ${styles.image}`} alt='HeaderImg' />;
};

export default Content;
