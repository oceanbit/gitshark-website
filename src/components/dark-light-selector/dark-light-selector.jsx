import * as React from 'preact';
import { useLayoutEffect, useState } from 'preact/hooks';
import ButtonBase from "@mui/material/ButtonBase"
import * as styles from "./dark-light-selector.module.scss"
import {COLOR_MODE_STORAGE_KEY} from '../../constants/theme';

export const DarkLightSelector = ({ className = "" }) => {
  const [colorMode, _setColorMode] = useState(() => {
    const root = window.document.documentElement;
    return root.classList.contains('dark') ? 'dark' : 'light';
  });

  const setColorMode = (theme) => {
    localStorage.setItem(COLOR_MODE_STORAGE_KEY, theme);
    _setColorMode(theme);
  }

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorMode === "light" ? "dark" : "light");
    root.classList.add(colorMode);
  }, [colorMode])

  return (
    <div className={`${styles.container} ${className}`}>
      <div
        className={`${styles.blueBtnContainer} ${colorMode === "light" ? styles.firstSelected : styles.secondSelected
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
          <span aria-hidden={true}>Light</span>
        </ButtonBase>
        <ButtonBase
          className={`${styles.greyBtn} ${styles.buttonBase}`}
          aria-hidden={colorMode !== "light"}
          aria-label={"Change the website's theme to dark mode"}
          onClick={() => setColorMode("dark")}
          tabIndex={colorMode !== "light" ? -1 : 0}
        >
          <span aria-hidden={true}>Dark</span>
        </ButtonBase>
      </div>
    </div>
  )
}
