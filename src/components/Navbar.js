import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { Route, Routes} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className={styles.Navbar}>
                <div className={styles.Navbar}>
                <img src='https://pbs.twimg.com/media/FvxPm6tWIAEZf2D?format=png&name=small' alt='name.png' className={styles.Name}/>
                <ul>
                    <li><Link to='/' className={styles.list}>HOME</Link></li>
                    <li><Link to='/about' className={styles.list}>ABOUT ME</Link></li>
                    <li><Link to='/portfolio' className={styles.list}>EXPERIENCE</Link></li>
                    <li><Link to='/projects' className={styles.list}>PROJECTS</Link></li>
                </ul>
                </div>
            </div>
        </>
    )
}
 

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;