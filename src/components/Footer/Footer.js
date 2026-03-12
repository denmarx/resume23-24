import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Left Section */}
        <div className={styles.footerLeft}>
          <div className={styles.footerInfo}>
            <p className={styles.name}>Dennis Marx</p>
            <p className={styles.title}>Science Teacher | Academic Clarity Coach</p>
            <p className={styles.location}>Vancouver, BC</p>
            <p className={styles.copyright}>Copyright © 2025</p>
          </div>
        </div>

        {/* Right Section - Social Links */}
        <div className={styles.footerRight}>
          <nav className={styles.socialLinks}>
            <a 
              href='https://www.linkedin.com/in/dennis-marx-5b479b2a8/' 
              target='_blank' 
              rel='noopener noreferrer'
              className={styles.socialLink}
              aria-label='LinkedIn'
            >
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z'></path>
                <circle cx='4' cy='4' r='2'></circle>
              </svg>
            </a>
            <a 
              href='mailto:dennis.marx93@gmail.com'
              className={styles.socialLink}
              aria-label='Email'
            >
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                <rect x='2' y='4' width='20' height='16' rx='2'></rect>
                <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
