import React, { useState, useEffect } from 'react';
import JobDetails from './getJobContent';
import styles from './Jobs.module.css';

const Jobs = () => {
  const [activeJob, setActiveJob] = useState('Fraunhofer-Institute');
  const [highlightStyle, setHighlightStyle] = useState({});

  const jobNames = [
    'Fraunhofer-Institute',
    'Digital Career Advisor',
    'Hospitality Manager',
    'Bremen Education Service',
  ];

  useEffect(() => {
    const activeIndex = jobNames.indexOf(activeJob);
    // Ensure that activeIndex is valid
    if (activeIndex !== -1) {
      const translateY = `calc(${activeIndex} * 42px)`;
      setHighlightStyle({
        transform: `translateY(${translateY})`,
      });
    }
  }, [activeJob, jobNames.length]);

  return (
    <section id='jobs' className={styles.jobsWrapper}>
      <h2 className={styles.jobHead}>Where I've Worked</h2>
      <div className={styles.inner}>
        <div className={styles.tabHighlightBar}>
          <div className={styles.tabHighlight} style={highlightStyle} />
        </div>
        <div role='tablist' className={styles.tabList}>
          {jobNames.map((jobName) => (
            <button key={jobName} onClick={() => setActiveJob(jobName)}>
              <span>{jobName}</span>
            </button>
          ))}
        </div>

        <div className={styles.jobPanel}>
          {jobNames.map((jobName) => (
            <JobDetails jobName={jobName} isActive={activeJob === jobName} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
