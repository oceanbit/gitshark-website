import * as React from "react"
import * as styles from './checkbox.module.scss';

export const Checkbox = ({ label = "" }) => {
  return (
    <label className={styles.prettyCheckbox}>
      <input type="checkbox" />
      <span>{label}</span>
    </label>
  )
}
