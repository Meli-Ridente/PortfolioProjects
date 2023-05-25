import React from 'react';
import styles from './Hero.module.css';
import {Link} from 'react-router-dom'
import { CV } from '../CV/cv'

const Hero = () => {
  const {hero} = CV;
  return (

  
  <div className={styles.Hero}>
    <div className={styles.card}>
      <div className={styles.Navbar}>
        <img  src='https://pbs.twimg.com/media/FvxPm6tWIAEZf2D?format=png&name=small' alt='name.png' className={styles.Name}/>
        <ul className={styles.list}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/about'>About me</Link></li>
        </ul>
      </div>
      <div className={styles.Container}>
        <div className={styles.div}>
          <h1 class='title'>Hi, I'm {hero?.name}</h1>
          <h2>{hero?.wd}</h2>
          <h3 className={styles.description}>{hero?.description}</h3>
          <button className={styles.Button}>Contact Me<ion-icon name="paper-plane-outline"></ion-icon></button>
        </div>
        <img src='https://pbs.twimg.com/media/FvxRldVWAAY2M93?format=jpg&name=large' alt='profile.jpg' className={styles.ImagenProfile}/>
      </div>
      <div className={styles.Redes}>
        <a href='https://www.linkedin.com/in/melissa-ridente/' target='blank'><ion-icon name="logo-linkedin"></ion-icon></a>
        <a href='https://github.com/Meli-Ridente' target='blank'><ion-icon name="logo-github"></ion-icon></a>
      </div>
    </div> 
    <div className={styles.languages}>
      <span className={styles.icon}><ion-icon name="logo-javascript" className={styles.languages}></ion-icon></span>
      <span className={styles.icon}><ion-icon name="logo-html5" className={styles.languages}></ion-icon></span>
      <span className={styles.icon}><ion-icon name="logo-css3" className={styles.languages}></ion-icon></span>
      <span className={styles.icon}><ion-icon name="logo-angular" className={styles.languages}></ion-icon></span>
      <span className={styles.icon}><ion-icon name="logo-react" className={styles.languages}></ion-icon></span>
    </div>
  </div>
  )
};

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
