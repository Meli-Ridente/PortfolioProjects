import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './Experience.module.css';
import { CV } from '../CV/cv'
import Header from './Header'
import { Carousel } from 'antd';
import {ShareAltOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

const Experience = () => {
  const carousel = useRef(null);
  const {experience} = CV;
  return ( 
    <>
      <Header />
      <div className={styles.Experience}>
        <div className={styles.Cont}>
          <div className={styles.Container}>
            <div className={styles.First}>
              <h1 className={styles.Title1}>MY WORK</h1> 
              <div className={styles.Line}></div>
            </div>
            <Carousel autoplay ref={carousel} className={styles.ContCarrousel}>
              {experience?.map((item) => {
                return (
                  <div key={JSON.stringify(item)} className={styles.Cards}> 
                    <img src={item?.img2} className={styles.IMG}/>
                    <div className={styles.Links}>
                      <a href={item?.link} className={styles.visit} target='_blank'><p><ShareAltOutlined /> VISIT WEB.</p></a>
                      <Link to={`/details/${item.id}`} className={styles.visit}><p><ShareAltOutlined /> DETAILS.</p></Link>
                    </div>
                  </div>
                );
              })}
            </Carousel>
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
      </div>
    </>
  );
};

Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
