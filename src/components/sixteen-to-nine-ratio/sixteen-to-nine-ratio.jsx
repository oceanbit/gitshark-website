import * as React from 'react';
import * as styles from './sixteen-to-nine-ratio.module.css';

export const SixteenToNineRatio = ({children, className = ''}) => {
  return (
    <div className={`${styles.parent} ${className}`}>
      <div className={styles.child}>
        {children}
      </div>
    </div>
  )
}
