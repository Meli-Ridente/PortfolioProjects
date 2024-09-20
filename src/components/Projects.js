import React from 'react';
import { CV } from '../CV/cv'
import styles from './Projects.module.css'
import {Link} from 'react-router-dom'
import {ShareAltOutlined} from '@ant-design/icons'
import Navbar from './Navbar';


const Projects = () => {
  const {projects} = CV;
  return ( 
    <div className={styles.Projects}>
      <div className={styles.Card}>
        <Navbar />
        <div className={styles.Grid}>
          {projects?.map((item) => {
            return (
              <div key={JSON.stringify(item)} className={styles.Cards}> 
                <p className={styles.Names}>{item?.name}</p>
                <p>{item?.description}</p>
                <img src={item?.img2} className={styles.IMG}/>
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
