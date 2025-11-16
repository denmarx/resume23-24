import styles from './WhatIDo.module.css';
import useRevealOnScroll from '../utils/js/useRevealOnScroll';

const WhatIDo = () => {
  const addRef = useRevealOnScroll();

  const services = [
    {
      title: 'The Clarity Engine',
      description: 'Structured 8-week clarity & AI-literacy training for teens.',
      icon: '📚'
    },
    {
      title: 'Science & Chemistry Teaching',
      description: 'Academic rigor, clarity-based learning, and hands-on science education.',
      icon: '🔬'
    },
    {
      title: 'Educational Software Development',
      description: 'Simulations, learning tools, and custom digital education resources.',
      icon: '💻'
    }
  ];

  return (
    <section className={styles.whatIDoWrapper} ref={addRef(0.3)}>
      <h2 className={styles.heading} ref={addRef(0.4)}>What I Do</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, idx) => (
          <div key={idx} className={styles.serviceCard} ref={addRef(0.5 + idx * 0.15)}>
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
