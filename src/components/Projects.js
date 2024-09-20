import React from 'react';
import { CV } from '../CV/cv'
import styles from './Projects.module.css'
import {Link} from 'react-router-dom'
import {ShareAltOutlined} from '@ant-design/icons'

const Projects = () => {
  const {projects} = CV;
  return ( 
    <div className={styles.Projects}>
      <div className={styles.Card}>
        <div className={styles.Navbar}>
          <img src='https://pbs.twimg.com/media/FvxPm6tWIAEZf2D?format=png&name=small' alt='name.png' className={styles.Name}/>
          <ul>
            <li><Link to='/' className={styles.list}>HOME</Link></li>
            <li><Link to='/about' className={styles.list}>ABOUT ME</Link></li>
            <li><Link to='/portfolio' className={styles.list}>EXPERIENCE</Link></li>
            <li><Link to='/projects' className={styles.list}>PROJECTS</Link></li>
          </ul>
        </div>
        <div className={styles.Grid}>
          {projects?.map((item) => {
            return (
              <div key={JSON.stringify(item)} className={styles.Cards}> 
                <p className={styles.Names}>{item?.name}</p>
                <p>{item?.description}</p>
                <a href={item?.link} className={styles.visit} target='_blank'><p><ShareAltOutlined /> WEB</p></a>
                <a href={item?.link2} className={styles.visit1} target='_blank'><p><ShareAltOutlined /> CODE</p></a>
              </div>
            );
          })}
          </div>
      </div>
    </div>
  );
};
    
Projects.propTypes = {};

Projects.defaultProps = {};

export default Projects;
