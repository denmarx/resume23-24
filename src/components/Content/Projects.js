import styles from './Projects.module.css';
import enzyme from '../../assets/enzyme.JPG';
import bfs from '../../assets/bfs.JPG';
import memento from '../../assets/memento.jpg';
import v1_website from '../../assets/vit.png';
import useRevealOnScroll from '../utils/js/useRevealOnScroll';

const Projects = () => {
  const addRef = useRevealOnScroll();
  return (
    <section id='projects' className={styles.projectWrapper}>
      <h2 className={styles.projectsHead} ref={addRef(0.3)}>
        Projects
      </h2>
      <ul className={styles.styledProjectGrid}>
        {/* Enzyme Project*/}
        <li className={styles.styledProject} ref={addRef(0.6)}>
          <div className={styles.projectContent}>
            <div>
              <p className={styles.projectOverline}>Featured Project</p>
              <h3 className={styles.projectTitle}>
                <a href='https://biochem-interactive.com/' rel='noopener noreferrer' target='_blank'>
                  Enzymatic Digestion Simulation
                </a>
              </h3>
              <div className={styles.projectDescription}>
                <p>
                  A front end tool created for simulating the enzymatic digestion process at the molecular level.
                  Developed using the Matter.js physics engine and built on React, this application provides a detailed
                  and interactive approach to learning about the digestive process.
                </p>
              </div>
              <ul className={styles.projectTechList}>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React</li>
                <li>Matter.js</li>
              </ul>
              <div className={styles.projectLinks}>
                <a
                  className={styles.githubLink}
                  href='https://github.com/lehmaric/Bio-Simulator'
                  aria-label='GitHub Link'
                  rel='noopener noreferrer'
                  target='_blank'
                >
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
                <a
                  href='https://biochem-interactive.com/'
                  aria-label='External Link'
                  rel='noopener noreferrer'
                  target='_blank'
                >
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
            <a href='https://biochem-interactive.com/' rel='noopener noreferrer' target='_blank'>
              <div className={styles.imageWrapper}>
                <div className={styles.subImageWrapper}>
                  <img aria-hidden='true' data-placeholder-image='' decoding='async' src={enzyme} alt=''></img>
                </div>
              </div>
            </a>
          </div>
        </li>
        {/* Vitamin D Project */}
        <li className={styles.styledProject} ref={addRef(0.6)}>
          <div className={styles.projectContent}>
            <div>
              <p className={styles.projectOverline}>Featured Project</p>
              <h3 className={styles.projectTitle}>
                <a href='/' rel='noopener noreferrer' target='_blank'>
                  Mobile App: Solar Dose
                </a>
              </h3>
              <div className={styles.projectDescription}>
                <p>
                  "Solar Dose" is an app designed to help users track the sun's position in the sky depending on
                  location and time of day and suggests the optimal time to get Vitamin D. The app is built using React
                  Native and Expo.
                  <br></br>
                  <br></br>
                  Preview Version available{' '}
                  <a href='https://snack.expo.dev/@denmarx/github.com-denmarx-expo-vitamind'>here</a>.<br></br>
                  Available soon for Android and iOS.
                </p>
              </div>
              <ul className={styles.projectTechList}>
                <li>React Native</li>
                <li>Expo SDK</li>
                <li>SunCalc</li>
              </ul>
              <div className={styles.projectLinks}>
                <a
                  className={styles.githubLink}
                  href='https://github.com/denmarx/expo-vitamind'
                  aria-label='GitHub Link'
                  rel='noopener noreferrer'
                  target='_blank'
                >
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
                <a
                  href='https://snack.expo.dev/@denmarx/github.com-denmarx-expo-vitamind'
                  aria-label='External Link'
                  rel='noopener noreferrer'
                  target='_blank'
                >
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
            <a
              href='https://snack.expo.dev/@denmarx/github.com-denmarx-expo-vitamind'
              rel='noopener noreferrer'
              target='_blank'
            >
              <div className={styles.imageWrapper}>
                <img aria-hidden='true' data-placeholder-image='' decoding='async' src={v1_website} alt=''></img>
              </div>
            </a>
          </div>
        </li>
        {/* BFS Project */}
        <li className={styles.styledProject} ref={addRef(0.6)}>
          <div className={styles.projectContent}>
            <div>
              <p className={styles.projectOverline}>Featured Project</p>
              <h3 className={styles.projectTitle}>
                <a href='game/game.html' rel='noopener noreferrer' target='_blank'>
                  Ikigai: Discover Your Ideal Career
                </a>
              </h3>
              <div className={styles.projectDescription}>
                <p className={styles.projectDescriptionParagraph}>
                  <span>Ikigai</span> is an innovative job-finding simulator that blends the art of storytelling with
                  the power of decision-making, designed to guide users through the enthralling journey of career
                  exploration. Crafted with the versatile Monogatari visual novel engine, this interactive experience is
                  built using JavaScript, HTML, and CSS.
                </p>
              </div>
              <ul className={styles.projectTechList}>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Monogatari</li>
              </ul>
              <div className={styles.projectLinks}>
                {/* <a
                  className={styles.githubLink}
                  href='/'
                  aria-label='GitHub Link'
                  rel='noopener noreferrer'
                  target='_blank'
                >
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
                </a> */}
                <a href='game/game.html' aria-label='External Link' rel='noopener noreferrer' target='_blank'>
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
            <a href='game/game.html' rel='noopener noreferrer' target='_blank'>
              <div className={styles.imageWrapper}>
                <img aria-hidden='true' data-placeholder-image='' decoding='async' src={bfs} alt=''></img>
              </div>
            </a>
          </div>
        </li>
        {/* Memento Mori Project */}
        <li className={styles.styledProject} ref={addRef(0.6)}>
          <div className={styles.projectContent}>
            <div>
              <p className={styles.projectOverline}>Featured Project</p>
              <h3 className={styles.projectTitle}>
                <a href='rpg/rpg.html' rel='noopener noreferrer' target='_blank'>
                  Memento Mori: A Philosophical RPG
                </a>
              </h3>
              <div className={styles.projectDescription}>
                <p>
                  Discover the profound insights of "Memento Mori", a unique game created with RPGMaker, now available
                  as an Android app. This game delves into the timeless theme of 'remembering our mortality', blending
                  philosophical concepts with engaging RPG gameplay.
                </p>
              </div>
              <ul className={styles.projectTechList}>
                <li>JavaScript</li>
                <li>RPG Maker MV</li>
              </ul>
              <div className={styles.projectLinks}>
                <a href='rpg/rpg.html' aria-label='External Link' rel='noopener noreferrer' target='_blank'>
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
            <a href='rpg/rpg.html' rel='noopener noreferrer' target='_blank'>
              <div className={styles.imageWrapper}>
                <img aria-hidden='true' data-placeholder-image='' decoding='async' src={memento} alt=''></img>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
