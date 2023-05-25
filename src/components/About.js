import React from 'react';
import Header from './Header';
import styles from './About.module.css';
import { CV } from '../CV/cv'

const About = () => {
  const {education, languages, hero, habilities} = CV;
  return (
    <>
      <Header /> 
      <div className={styles.About}>
        <div className={styles.Container}>
          <div className={styles.First}>
            <p className={styles.infor}><ion-icon name="earth-outline"></ion-icon>{hero.city}</p>
            <p className={styles.infor}><ion-icon name="mail-outline"></ion-icon>{hero.email}</p>
            <p className={styles.infor}><ion-icon name="call-outline"></ion-icon>{hero.phone}</p>
            <p className={styles.infor}><ion-icon name="sparkles-outline"></ion-icon>{hero.birth}</p>
          </div>
          <div className={styles.AboutMe}> 
              {hero.aboutMe.map((item) => {
                return (
                  <div key={JSON.stringify(item)}>
                    <p><ion-icon name="caret-forward-outline"></ion-icon>{item.info}</p>
                  </div>
                )
              })}
            </div>
          <h3 className={styles.LangTitle}><ion-icon name="book-outline"></ion-icon></h3>
          <div className={styles.Cont}>
            <div className={styles.Education}>
              {education?.map((item) => {
                return (
                  <div key={JSON.stringify(item)} className={styles.Cards}>
                    <div className={styles.info}>
                      <h5 className={styles.title}>{item?.name}</h5>
                      <p className={styles.date}>{item?.date}</p>
                      <p className={styles.pclass}>{item?.where}</p>
                      <p className={styles.pclass}>{item?.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          
            <h3 className={styles.LangTitle}><ion-icon name="language-outline"></ion-icon></h3>
            <div className={styles.Languages}>
              {languages?.map((item) => {
                return (
                  <div key={JSON.stringify(item)} className={styles.Cards}>
                    <div className={styles.info}>
                      <h3 className={styles.title}>{item?.language}</h3>
                      <p className={styles.pclass}>{item?.level}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.languages}>
              <span className={styles.icon}><ion-icon name="logo-javascript" className={styles.languages}></ion-icon></span>
              <span className={styles.icon}><ion-icon name="logo-html5" className={styles.languages}></ion-icon></span>
              <span className={styles.icon}><ion-icon name="logo-css3" className={styles.languages}></ion-icon></span>
              <span className={styles.icon}><ion-icon name="logo-angular" className={styles.languages}></ion-icon></span>
              <span className={styles.icon}><ion-icon name="logo-react" className={styles.languages}></ion-icon></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

About.propTypes = {};

About.defaultProps = {};

export default About;
