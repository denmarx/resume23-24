import styles from './Projects.module.css';
import enzyme from '../../assets/enzyme.JPG';
const Projects = () => {
  return (
    <section id='projects' className={styles.projectWrapper}>
      <h2 className={styles.projectsHead}>Some Things I've build</h2>
      <ul className={styles.styledProjectGrid}>
        <li className={styles.styledProject}>
          <div className={styles.projectContent}>
            <div>
              <p className={styles.projectOverline}>Featured Project</p>
              <h3 className={styles.projectTitle}>
                <a href='/' rel='noopener noreferrer' target='_blank'>
                  Enzyme Digestion
                </a>
              </h3>
              <div className={styles.projectDescription}>
                <p>An education tool simulating the enzymatic processes of nutrient digestion.</p>
              </div>
              <ul className={styles.projectTechList}>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React</li>
                <li>Matter.js</li>
              </ul>
              <div className={styles.projectLinks}>
                <a href='/' aria-label='GitHub Link' rel='noopener noreferrer' target='_blank'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className={styles.feather}
                  >
                    <title>GitHub</title>
                    <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                  </svg>
                </a>
                <a href='/' aria-label='External Link' rel='noopener noreferrer' target='_blank'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className={styles.feather}
                  >
                    <title>External Link</title>
                    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                    <polyline points='15 3 21 3 21 9'></polyline>
                    <line x1='10' y1='14' x2='21' y2='3'></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projectImage}>
            <a href='/' rel='noopener noreferrer' target='_blank'>
              <div className={styles.imageWrapper}>
                <img aria-hidden='true' data-placeholder-image='' decoding='async' src={enzyme} alt=''></img>
              </div>
            </a>
          </div>
        </li>
        <li className={styles.styledProject}>
          <div className={styles.projectContent}>
            <div>
              <p className={styles.projectOverline}>Featured Project</p>
              <h3 className={styles.projectTitle}>
                <a href='/' rel='noopener noreferrer' target='_blank'>
                  Enzyme Digestion
                </a>
              </h3>
              <div className={styles.projectDescription}>
                <p>An education tool simulating the enzymatic processes of nutrient digestion.</p>
              </div>
              <ul className={styles.projectTechList}>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React</li>
                <li>Matter.js</li>
              </ul>
              <div className={styles.projectLinks}>
                <a href='/' aria-label='GitHub Link' rel='noopener noreferrer' target='_blank'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className={styles.feather}
                  >
                    <title>GitHub</title>
                    <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                  </svg>
                </a>
                <a href='/' aria-label='External Link' rel='noopener noreferrer' target='_blank'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className={styles.feather}
                  >
                    <title>External Link</title>
                    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                    <polyline points='15 3 21 3 21 9'></polyline>
                    <line x1='10' y1='14' x2='21' y2='3'></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projectImage}>
            <a href='/' rel='noopener noreferrer' target='_blank'>
              <div className={styles.imageWrapper}>
                <img aria-hidden='true' data-placeholder-image='' decoding='async' src={enzyme} alt=''></img>
              </div>
            </a>
          </div>
        </li>
        <li className={styles.styledProject}>
          <div className={styles.projectContent}>
            <div>
              <p className={styles.projectOverline}>Featured Project</p>
              <h3 className={styles.projectTitle}>
                <a href='/' rel='noopener noreferrer' target='_blank'>
                  Enzyme Digestion
                </a>
              </h3>
              <div className={styles.projectDescription}>
                <p>An education tool simulating the enzymatic processes of nutrient digestion.</p>
              </div>
              <ul className={styles.projectTechList}>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React</li>
                <li>Matter.js</li>
              </ul>
              <div className={styles.projectLinks}>
                <a href='/' aria-label='GitHub Link' rel='noopener noreferrer' target='_blank'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className={styles.feather}
                  >
                    <title>GitHub</title>
                    <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                  </svg>
                </a>
                <a href='/' aria-label='External Link' rel='noopener noreferrer' target='_blank'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className={styles.feather}
                  >
                    <title>External Link</title>
                    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                    <polyline points='15 3 21 3 21 9'></polyline>
                    <line x1='10' y1='14' x2='21' y2='3'></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projectImage}>
            <a href='/' rel='noopener noreferrer' target='_blank'>
              <div className={styles.imageWrapper}>
                <img aria-hidden='true' data-placeholder-image='' decoding='async' src={enzyme} alt=''></img>
              </div>
            </a>
          </div>
        </li>
        <li className={styles.styledProject}>
          <div className={styles.projectContent}>
            <div>
              <p className={styles.projectOverline}>Featured Project</p>
              <h3 className={styles.projectTitle}>
                <a href='/' rel='noopener noreferrer' target='_blank'>
                  Enzyme Digestion
                </a>
              </h3>
              <div className={styles.projectDescription}>
                <p>An education tool simulating the enzymatic processes of nutrient digestion.</p>
              </div>
              <ul className={styles.projectTechList}>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React</li>
                <li>Matter.js</li>
              </ul>
              <div className={styles.projectLinks}>
                <a href='/' aria-label='GitHub Link' rel='noopener noreferrer' target='_blank'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className={styles.feather}
                  >
                    <title>GitHub</title>
                    <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                  </svg>
                </a>
                <a href='/' aria-label='External Link' rel='noopener noreferrer' target='_blank'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className={styles.feather}
                  >
                    <title>External Link</title>
                    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                    <polyline points='15 3 21 3 21 9'></polyline>
                    <line x1='10' y1='14' x2='21' y2='3'></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projectImage}>
            <a href='/' rel='noopener noreferrer' target='_blank'>
              <div className={styles.imageWrapper}>
                <img aria-hidden='true' data-placeholder-image='' decoding='async' src={enzyme} alt=''></img>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
