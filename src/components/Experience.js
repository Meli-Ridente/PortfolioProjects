import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './Experience.module.css';
import { CV } from '../CV/cv'
import { Carousel } from 'antd';
import {ShareAltOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const Experience = () => {
  const carousel = useRef(null);
  const {experience} = CV;
  return ( 
    <>
      <div className={styles.Experience}>
        <div className={styles.Container}> 
          <div className={styles.Navbar}>
            <img src='https://pbs.twimg.com/media/FvxPm6tWIAEZf2D?format=png&name=small' alt='name.png' className={styles.Name}/>
            <ul>
              <li><Link to='/' className={styles.list}>HOME</Link></li>
              <li><Link to='/about' className={styles.list}>ABOUT ME</Link></li>
              <li><Link to='/portfolio' className={styles.list}>EXPERIENCE</Link></li>
              <li><Link to='/projects' className={styles.list}>PROJECTS</Link></li>
            </ul>
          </div>
          <div className={styles.Second}>
              {experience?.map((item) => {
                return (
                  <div key={JSON.stringify(item)} className={styles.Cards}> 
                    {/*<img src={item?.img2} className={styles.IMG}/>*/}
                    <p className={styles.nameProject}>{item?.name}</p>
                    <p className={styles.nameProject}>{item?.date}</p>
                    <p className={styles.descriptionP}>{item?.description}</p>
                    
                      {item?.title}
                      {item?.title2}
                      {/*{
                      <div>
                        <a href={item?.title} className={styles.visit} target='_blank'><p><ShareAltOutlined /> BULKRO.</p></a>
                        <a href={item?.title2} className={styles.visit} target='_blank'><p><ShareAltOutlined /> SYSWA WEB.</p></a>
                      </div>
                      }
                    <div className={styles.Links}>
                    
                      <a href={item?.link} className={styles.visit} target='_blank'><p><ShareAltOutlined /> VISIT WEB.</p></a>
                      <Link to={`/details/${item.id}`} className={styles.visit}><p><ShareAltOutlined /> DETAILS.</p></Link>
                    </div>*/}
                  </div>
                );
              })}
            </div>
        </div>
        <div className={styles.Min600}>
          <div className={styles.First}>
            <h1 className={styles.Title1}>MY WORK</h1>
            <div className={styles.Line}></div>
          </div>
          {experience?.map((item) => {
            return (
              <div key={JSON.stringify(item)} className={styles.Card}>
                <div className={styles.Dentro}> 
                  <p className={styles.Names}>✓{item?.name}</p>
                  <div className={styles.Links}>
                    <a href={item?.link} className={styles.visit} target='_blank'><p><ShareAltOutlined /> VISIT WEB.</p></a>
                    <Link to={`/details/${item.id}`} className={styles.visit}><p><ShareAltOutlined /> DETAILS.</p></Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div> 
      </div>
    </>
  );
};

Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
