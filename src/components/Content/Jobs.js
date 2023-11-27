import styles from './Jobs.module.css';

const Jobs = () => {
  return (
    <section id='jobs'>
      <h2>Where I've Worked</h2>
      <div className={styles.inner}>
        <div role='tablist' className={styles.tabList}>
          <button>
            <span>Bremen Education Service</span>
          </button>
          <button>
            <span>Digital Career Advisor</span>
          </button>
          <button>
            <span>Hospitality Manager</span>
          </button>
          <button>
            <span>Fraunhofer-Institute</span>
          </button>
        </div>
        <div className={styles.jobPanel}>
          <div role='tabpanel'>
            <h3>
              <span>Teacher and Trainee Teacher</span>
            </h3>
            <p className={styles.range}>October 2022 - Present</p>
            <div>
              <ul>
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
          </div>
          <div role='tabpanel'>
            <h3>
              <span>Self-Employed as a Digital Career Advisor</span>
            </h3>
            <p className={styles.range}>February 2022 - October 2022</p>
            <div>
              <ul>
                <li>
                  Developed customized software solutions to support career counseling, including interactive tools and
                  assessments.
                </li>
                <li>
                  Conducted individual and group counseling sessions, both online and in-person, to assist students in
                  making career choices.
                </li>
                <li>
                  Created informational materials and guides for career orientation, helping students identify their
                  strengths and interests.
                </li>
                <li>Established and maintained networks with schools and educational institutions.</li>
              </ul>
            </div>
          </div>
          <div role='tabpanel'>
            <h3>
              <span>Hospitality Manager</span>
            </h3>
            <p className={styles.range}>October 2021 - October 2022</p>
            <div>
              <ul>
                <li>Strategic planning and business model development for multiple gastronomy establishments.</li>
                <li>
                  Oversight of daily operations, including staff management, financial planning, and customer service.
                </li>
                <li>Implementation of quality control standards to ensure an excellent customer experience.</li>
                <li>
                  Coordination of marketing and promotional activities to enhance brand awareness and customer loyalty.
                </li>
              </ul>
            </div>
          </div>
          <div role='tabpanel'>
            <h3>
              <span>Scientific Staff Member</span>
            </h3>
            <p className={styles.range}>November 2017 - October 2020</p>
            <div>
              <ul>
                <li>
                  Led and conducted research projects in the development of innovative medical implants with enhanced
                  properties to prevent infections.
                </li>
                <li>Applied advanced techniques in material research and surface modification.</li>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
