import * as React from 'react';
import * as styles from './one-to-one-ratio.module.css';

export const OneToOneRatio = ({children}) => {
  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        {children}
      </div>
    </div>
  )
}
