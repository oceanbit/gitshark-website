import * as React from "react"
import * as styles from './checkbox.module.scss';

export const Checkbox = ({ label = "", inputProps = {} }) => {
  return (
    <label className={styles.prettyCheckbox}>
      <input type="checkbox" {...inputProps} />
      <span>{label}</span>
    </label>
  )
}
