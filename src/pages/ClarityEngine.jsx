import styles from './ClarityEngine.module.css';
import useRevealOnScroll from '../components/utils/js/useRevealOnScroll';
import { Link } from 'react-router-dom';

const ClarityEngine = () => {
  const addRef = useRevealOnScroll();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const weeks = [
    {
      week: 1,
      title: 'Foundations: How to Think',
      outcome: 'Turn any task into a step-by-step plan'
    },
    {
      week: 2,
      title: 'Reading for Meaning',
      outcome: 'Understand structure, not just content'
    },
    {
      week: 3,
      title: 'Analytical Reasoning',
      outcome: 'Spot weak reasoning and missing steps'
    },
    {
      week: 4,
      title: 'Writing with Clarity',
      outcome: 'Write clear, structured paragraphs'
    },
    {
      week: 5,
      title: 'Problem Breakdown',
      outcome: 'Solve unfamiliar problems step-by-step'
    },
    {
      week: 6,
      title: 'AI as Thought Partner',
      outcome: 'Use AI responsibly for better thinking'
    },
    {
      week: 7,
      title: 'Apply to Real Work',
      outcome: 'Transfer skills to your own assignments'
    },
    {
      week: 8,
      title: 'Build Independence',
      outcome: 'Create your personal clarity system'
    }
  ];

  const whoHelps = [
    'Students struggling to focus or organize their thinking',
    'Teens who want to understand what they\'re reading (not just read)',
    'Students who feel overwhelmed by assignments',
    'Young people learning to work with AI responsibly',
    'Anyone working toward stronger academic independence'
  ];

  const learnsAbout = [
    'Reading clarity',
    'Reasoning',
    'Writing clarity',
    'Problem breakdown',
    'AI-literacy',
    'Executive-function habits'
  ];

  return (
    <div className={styles.clarityPage}>
      {/* Hero Section */}
      <section className={styles.heroSection} ref={addRef(0.3)}>
        <h1 className={styles.mainHeadline}>The Clarity Engine</h1>
        <p className={styles.subheadline}>
          A modern learning system that teaches students to read better, think clearer, write smarter — with AI done right.
        </p>
        <p className={styles.supportLine}>
      An 8-week clarity program for high-school students who need structure, 
      reasoning skills, and academic independence.
    </p>
        <div className={styles.ctaRow}>
          <a href="mailto: dennis.marx93@gmail.com" className={styles.primaryButton}>
            Book Diagnostic Session
            </a>
          <button onClick={() => scrollToSection('program')} className={styles.secondaryButton} style={{ background: 'none', border: '2px solid #2148A1', color: '#2148A1', padding: '12px 32px', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: '600', fontFamily: 'inherit' }}>
            How It Works
            </button>
        </div>
      </section>

      {/* Who This Helps */}
      <section className={styles.sectionWrapper} ref={addRef(0.4)}>
        <h2 className={styles.sectionHeading}>Who This Helps</h2>
        <ul className={styles.bulletList}>
          {whoHelps.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* What Students Learn */}
      <section className={styles.sectionWrapper} ref={addRef(0.4)}>
        <h2 className={styles.sectionHeading}>What Students Learn</h2>
        <div className={styles.learningGrid}>
          {learnsAbout.map((item, idx) => (
            <div key={idx} className={styles.learningCard}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 8-Week Program Overview */}
      <section id="program" className={styles.sectionWrapper} ref={addRef(0.4)}>
        <h2 className={styles.sectionHeading}>The 8-Week Program</h2>
        <p className={styles.programDescription}>
          Each week builds on the last, combining reading, reasoning, writing, AI-literacy tasks, and a measurable outcome.
        </p>
        <div className={styles.weeksGrid}>
          {weeks.map((w) => (
            <div key={w.week} className={styles.weekBox} ref={addRef(0.5)}>
              <span className={styles.weekNumber}>Week {w.week}</span>
              <h3 className={styles.weekBoxTitle}>{w.title}</h3>
              <p className={styles.weekOutcome}>{w.outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className={styles.sectionWrapper} ref={addRef(0.4)}>
        <h2 className={styles.sectionHeading}>Program Details</h2>
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3>Investment</h3>
            <p className={styles.price}>680 CAD</p>
            <p className={styles.priceNote}>per student</p>
          </div>
          <div className={styles.pricingCard}>
            <h3>Duration</h3>
            <p className={styles.price}>8 Weeks</p>
            <p className={styles.priceNote}>1-hour weekly sessions</p>
          </div>
          <div className={styles.pricingCard}>
            <h3>Cohort Size</h3>
            <p className={styles.price}>3–5 Students</p>
            <p className={styles.priceNote}>small group instruction</p>
          </div>
        </div>
      </section>

      {/* Start Dates */}
      <section className={styles.sectionWrapper} ref={addRef(0.4)}>
        <h2 className={styles.sectionHeading}>Start Your Journey</h2>
        <div className={styles.startDatesCard}>
          <p className={styles.cohortLabel}>January Cohort</p>
          <p className={styles.cohortStatus}>Now enrolling</p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.contactSection} ref={addRef(0.4)}>
        <h2 className={styles.ctaHeading}>Ready to Transform Your Academic Skills?</h2>
        <p className={styles.ctaText}>
          Join the next cohort and build the clarity and confidence you need to succeed.
        </p>
        <div className={styles.ctaButtons}>
          <a href='mailto:dennis.marx93@gmail.com' className={styles.primaryCta}>
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default ClarityEngine;
