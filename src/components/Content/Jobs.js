import React, { useState, useEffect, useRef } from 'react';
import JobDetails from './getJobContent';
import styles from './Jobs.module.css';
import useRevealOnScroll from '../utils/js/useRevealOnScroll';

const Jobs = () => {
  const addRef = useRevealOnScroll();
  const tabHighlightRef = useRef(null);
  const tabRefs = useRef([]);
  const [activeJob, setActiveJob] = useState('Web Developer');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const jobNames = ['Web Developer', 'Fraunhofer-Institute', 'Teacher'];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updateHighlightPosition = (index) => {
    const tab = tabRefs.current[index];
    if (tab) {
      const tabSize = windowWidth <= 768 ? tab.offsetWidth : tab.offsetHeight;
      const transformValue = index * tabSize;
      const transformProp = windowWidth <= 768 ? 'translateX' : 'translateY';
      if (tabHighlightRef.current) {
        tabHighlightRef.current.style.transform = `${transformProp}(${transformValue}px)`;
      }
    }
  };

  const handleTabClick = (jobName, index) => {
    setActiveJob(jobName);
    updateHighlightPosition(index);
  };

  useEffect(() => {
    const activeIndex = jobNames.indexOf(activeJob);
    updateHighlightPosition(activeIndex);
  }, [activeJob, windowWidth]);
  return (
    <section id='jobs' className={styles.jobsWrapper}>
      <h2 className={styles.jobHead} ref={addRef(0.5)}>
        Where I've Worked
      </h2>
      <div className={styles.inner} ref={addRef(0.8)}>
        {/* <div className={styles.tabHighlightBar}>
        </div> */}
        <div role='tablist' className={styles.tabList}>
          {jobNames.map((jobName, index) => (
            <button
              className={styles.tabListButton}
              key={jobName}
              onClick={() => handleTabClick(jobName, index)}
              style={{
                color: activeJob === jobName ? 'var(--green)' : 'var(--slate)',
                backgroundColor: activeJob === jobName ? 'var(--light-navy)' : 'var(--navy)',
              }}
              ref={(el) => (tabRefs.current[index] = el)}
            >
              <span>{jobName}</span>
            </button>
          ))}
          <div className={styles.tabHighlight} ref={tabHighlightRef} />
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
