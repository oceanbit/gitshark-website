import * as React from 'react';
import * as styles from './one-to-one-ratio.module.css';

export const OneToOneRatio = ({children, className = ''}) => {
  return (
    <div className={`${styles.parent} ${className}`}>
      <div className={styles.child}>
        {children}
      </div>
    </div>
  )
}
