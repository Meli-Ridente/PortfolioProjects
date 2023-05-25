import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Education.module.css';

const Education = ({inEducation}) => {
  return ( 
    <div>
      {/* <div className={styles.Education}>
        {inEducation.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className={styles.Name}><ion-icon name="book-outline"></ion-icon> {item.name}</p>
              <div className={styles.Cont}>              
                <p>{item.where}</p>
                <p>{item.date}</p>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
    


Education.propTypes = {};

Education.defaultProps = {};

export default Education;
