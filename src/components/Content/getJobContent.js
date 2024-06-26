import React from 'react';
import styles from './Jobs.module.css';

const getJobContent = ({ jobName, isActive }) => {
  const setJobContent = (name) => {
    switch (name) {
      case 'Web Developer':
        return (
          <>
            <h3>
              <span>Self-Employed as Web Developer</span>
            </h3>
            <p className={styles.range}>February 2021 - present</p>
            <div>
              <ul className={styles.jobList}>
                <li>
                  Led the design and implementation of a{' '}
                  <a
                    href='https://biochem-interactive.com/'
                    aria-label='External Link'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    digital education platform
                  </a>
                  , increasing user engagement and success rates.
                </li>
                <li>
                  Developed tailored{' '}
                  <a
                    href='https://dennis-marx.de/game/game.html'
                    aria-label='External Link'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    {' '}
                    web applications for career counseling
                  </a>
                  , integrating interactive tools and assessments.{' '}
                </li>
                <li>
                  Built and maintained responsive, user-friendly personal websites using HTML, CSS, JavaScript, and
                  React.
                </li>
              </ul>
            </div>
          </>
        );
      case 'Fraunhofer-Institute':
        return (
          <>
            <h3>
              <span>Scientific Staff Member</span>
            </h3>
            <p className={styles.range}>November 2017 - October 2020</p>
            <div>
              <ul className={styles.jobList}>
                <li>
                  Led and conducted research projects in the development of innovative medical implants with enhanced
                  properties to prevent infections.
                </li>
                <li>Applied advanced techniques in material research, surface modification and cell assays.</li>
                <li>
                  Presented research findings at international medical fairs and conferences, and delivered expert
                  lectures.
                </li>
                <li>
                  Authored and published scientific articles in leading journals, and participated in interdisciplinary
                  research collaborations.
                </li>
              </ul>
            </div>
          </>
        );

      case 'Teacher':
        return (
          <>
            <h3>
              <span>Teacher and Trainee Teacher</span>
            </h3>
            <p className={styles.range}>October 2022 - Present</p>
            <div>
              <ul className={styles.jobList}>
                <li>
                  Started as a substitute teacher, responsible for covering and conducting classes in chemistry,
                  biology, and digital media.
                </li>
                <li>
                  Progressed to a trainee teacher role, focusing on developing pedagogical skills and deepening subject
                  knowledge.
                </li>
                <li>
                  Designed and implemented innovative teaching methods, particularly in digital media, to enhance
                  student engagement and learning efficiency.
                </li>
                <li>Actively participated in teacher conferences and internal educational training.</li>
              </ul>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div role='tabpanel' className={`${styles.tabPanel} ${!isActive ? styles.hide : ''}`}>
      {setJobContent(jobName)}
    </div>
  );
};

export default getJobContent;
