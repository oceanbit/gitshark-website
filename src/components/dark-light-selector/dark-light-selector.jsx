import * as React from "react"
import { ButtonBase } from "@material-ui/core"
import * as styles from "./dark-light-selector.module.scss"
import { ThemeContext } from "../../constants/theme-context"

export const DarkLightSelector = ({className = ''}) => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  return (
    <div className={`${styles.container} ${className}`}>
      <div
        className={`${styles.blueBtnContainer} ${
          colorMode === "light" ? styles.firstSelected : styles.secondSelected
        }`}
        aria-hidden={true}
      >
        <ButtonBase
          className={`${styles.blueBtn} ${styles.buttonBase}`}
          onClick={() => setColorMode("light")}
        >
          Light
        </ButtonBase>
        <ButtonBase
          className={`${styles.blueBtn} ${styles.buttonBase}`}
          onClick={() => setColorMode("dark")}
        >
          Dark
        </ButtonBase>
      </div>
      <div>
        <ButtonBase
          className={`${styles.greyBtn} ${styles.buttonBase}`}
          aria-hidden={colorMode === "light"}
          aria-label={"Change the website's theme to light mode"}
          onClick={() => setColorMode("light")}
          tabIndex={colorMode === "light" ? -1 : 0}
        >
          <span aria-hidden={true}>
            Light
          </span>
        </ButtonBase>
        <ButtonBase
          className={`${styles.greyBtn} ${styles.buttonBase}`}
          aria-hidden={colorMode !== "light"}
          aria-label={"Change the website's theme to dark mode"}
          onClick={() => setColorMode("dark")}
          tabIndex={colorMode !== "light" ? -1 : 0}
        >
          <span aria-hidden={true}>
            Dark
          </span>
        </ButtonBase>
      </div>
    </div>
  )
}
