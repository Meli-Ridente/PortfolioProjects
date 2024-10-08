import React from 'react';
import styles from './Hero.module.css';
import {Link} from 'react-router-dom'
import { CV } from '../CV/cv'
import Navbar from './Navbar';

const Hero = () => {
  const {hero} = CV;
  return (
    <div className={styles.Hero}>
      <div className={styles.Card}>
        <Navbar />
        <div className={styles.DivRedes}>
          <div className={styles.Redes}>
            <a href='https://www.linkedin.com/in/melissa-ridente/' target='blank' className={styles.a}><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href='https://github.com/Meli-Ridente' target='blank' className={styles.a}><ion-icon name="logo-github"></ion-icon></a>
          </div>
          <div className={styles.Container}>
            <div className={styles.div}>
              <h2 className={styles.wd}>{hero?.wd}</h2>
              <h1 class={styles.title}>Hi, I'm {hero?.name}</h1>
              <h3 className={styles.description}>{hero?.description}</h3>
              <button className={styles.Button}><a href="mailto:melissaridente3e@gmail.com" className={styles.ahref}>Contact me</a></button>
              
            </div>
            <img src='https://pbs.twimg.com/media/FvxRldVWAAY2M93?format=jpg&name=large' alt='profile.jpg' className={styles.ImagenProfile}/>
          </div>
        </div> 
        <div className={styles.languages}>
          <span className={styles.icon}><ion-icon name="logo-javascript" className={styles.languages}></ion-icon></span>
          <span className={styles.icon}><ion-icon name="logo-html5" className={styles.languages}></ion-icon></span>
          <span className={styles.icon}><ion-icon name="logo-css3" className={styles.languages}></ion-icon></span>
          <span className={styles.icon}><ion-icon name="logo-angular" className={styles.languages}></ion-icon></span>
          <span className={styles.icon}><ion-icon name="logo-react" className={styles.languages}></ion-icon></span>
          <span className={styles.icon}><ion-icon name="logo-wordpress" className={styles.languages}></ion-icon></span>
      </div>
     </div>
    </div>
  )
};

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
