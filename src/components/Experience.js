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
            <h1 className={styles.Title1}>PROJECTS</h1>
            <div className={styles.Line}></div>
            <p>Here you can see my personal projects.</p>
          </div>
          <div className={styles.Experience}>
            {experience?.map((item) => {
              return (
                <div key={JSON.stringify(item)} className={styles.Cards}>
                  <div className={styles.info}>
                    <h2 className={styles.title}>{item?.name}</h2>
                    <p className={styles.pclass}>{item?.description}</p>
                    <button className={styles.Bottons}>MORE</button>
                  </div>
                  <img src={item?.img} className={styles.IMAGEN}></img>
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
