import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './Experience.module.css';
import { CV } from '../CV/cv'
import Education from './Education';
import Navbar from './Navbar';

const Experience = () => {
  const carousel = useRef(null);
  const {experience} = CV;
  return ( 
    <>
      <div className={styles.Experience}>
        <div className={styles.Container}> 
          <Navbar />
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
      </div>
    </>
  );
};

Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
