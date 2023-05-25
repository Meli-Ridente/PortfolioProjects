import React from 'react';
import PropTypes from 'prop-types';
import styles from './More.module.css';

const More = ({inLanguages, inHabilities}) => {
  return ( 
    <div>
      {/* <div className={styles.line}></div>
      <h3 className={styles.h3}>Languajes</h3>
      <div className={styles.More}>
        {inLanguages.map((it) => {
          return (
            <div key={JSON.stringify(it)}>
              
              <p className={styles.p}><ion-icon name="language-outline"></ion-icon>{it.language}</p>
              <p>Wrlevel: {it.wrlevel}</p>
              <p>Splevel: {it.splevel}</p>
            </div>
          );
        })}
      </div>
      <h3 className={styles.h3}>Habilities</h3>
      <div className={styles.Habilities}>
        {inHabilities.map((it) => {
          return(<p><ion-icon name="pricetag-outline"></ion-icon>{it}</p>)
        })}
      </div> */}
    </div>
  );
};
    
More.propTypes = {};

More.defaultProps = {};

export default More;
