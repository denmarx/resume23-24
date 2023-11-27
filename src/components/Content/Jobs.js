import React, { useState } from 'react';
import JobDetails from './JobDetails'; // Import the new component
import styles from './Jobs.module.css';

const Jobs = () => {
  const [activeJob, setActiveJob] = useState('Fraunhofer-Institute');

  const jobNames = [
    'Fraunhofer-Institute',
    'Digital Career Advisor',
    'Hospitality Manager',
    'Bremen Education Service',
  ];

  return (
    <section id='jobs' className={styles.jobsWrapper}>
      <h2 className={styles.jobHead}>Where I've Worked</h2>
      <div className={styles.inner}>
        <div role='tablist' className={styles.tabList}>
          {jobNames.map((jobName) => (
            <button key={jobName} onClick={() => setActiveJob(jobName)}>
              <span>{jobName}</span>
            </button>
          ))}
        </div>
        <div className={styles.jobPanel}>
          {jobNames.map((jobName) => (
            <JobDetails key={jobName} jobName={jobName} isActive={activeJob === jobName} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
