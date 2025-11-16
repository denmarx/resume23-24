import styles from './ClarityEnginePreview.module.css';
import useRevealOnScroll from '../utils/js/useRevealOnScroll';

const ClarityEnginePreview = () => {
  const addRef = useRevealOnScroll();

  const features = [
    'Learn how to read for structure',
    'Think step-by-step',
    'Write with precision',
    'Break down complex problems',
    'Use AI safely and responsibly'
  ];

  return (
    <section className={styles.previewWrapper} ref={addRef(0.3)}>
      <h2 className={styles.heading} ref={addRef(0.4)}>The Clarity Engine</h2>
      <p className={styles.subheading} ref={addRef(0.5)}>
        Helping students build clarity, confidence, & independence.
      </p>
      
      <div className={styles.content}>
        <ul className={styles.featuresList} ref={addRef(0.6)}>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      <a href="/clarity-engine" className={styles.ctaButton} ref={addRef(0.7)}>
        Explore the 8-Week Program →
      </a>
    </section>
  );
};

export default ClarityEnginePreview;
