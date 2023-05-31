import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Experience.module.css';
import { CV } from '../CV/cv'
import Header from './Header'
import { Navigate } from 'react-router-dom';

const Experience = () => {
  
  const {experience} = CV;
  return ( 
    <>
      <Header /> 
      <div className={styles.Cont}>
        <div className={styles.Container}>
          <div className={styles.First}>
            <h1 className={styles.Title1}>MY WORK</h1>
            <div className={styles.Line}></div>
          </div>
          <div className={styles.containerFirst}>
            {experience?.map((item) => {
              return (
                <div key={JSON.stringify(item)} className={styles.Cards}>
                  <div className={styles.info}>
                    {/* <button className={styles.Bottons}>MORE</button> */}
                    <img src={item?.img2} className={styles.IMAGEN}></img>
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
