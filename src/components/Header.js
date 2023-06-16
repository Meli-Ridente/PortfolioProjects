import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import styles from './Headercss.module.css'

const Header = () => (
  <div className={styles.Headercss}>
    <img  src='https://pbs.twimg.com/media/FvxPm6tWIAEZf2D?format=png&name=small' alt='name.png' className={styles.Name}/>
    <ul className={styles.Navbar}>
      <li><Link to='/' className={styles.list}>Home</Link></li>
      <li><Link to='/portfolio' className={styles.list}>Portfolio</Link></li>
      <li><Link to='/about' className={styles.list}>About me</Link></li>
    </ul>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
