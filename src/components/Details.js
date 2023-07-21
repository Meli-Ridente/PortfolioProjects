import React, {useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { CV } from '../CV/cv'
import {ShareAltOutlined} from '@ant-design/icons'
import styles from './Details.module.css';
import Header from './Header';

const Details = () => {
  const { id } = useParams();
  const {experience} = CV;
  console.log(id)
  console.log(experience.id, 'a')
 return (
  <>
    <Header />
    <div className={styles.Details}>
      <div className={styles.Cont}>
        <div className={styles.Cards}>
          <div className={styles.Card}>
            {experience?.map((item) => {
              return (
                <div key={JSON.stringify(item)} className={styles.carta}> 
                  {item.id == id ? 
                    <div>
                      <h1 className={styles.title}>{item.name}</h1>
                      <p className={styles.element}>{item.description}</p>
                      <a href={item?.link} className={styles.visit} target='_blank'><p><ShareAltOutlined /> VISIT WEB.</p></a>
                    </div> 
                  
                    : ''
                  } 
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
 ;

Details.propTypes = {};

Details.defaultProps = {};

export default Details;
