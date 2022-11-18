import { SharkBackground } from "../shark-background"
import { PlayPauseBackground } from "../play-pause-background"
import * as styles from "./header-sheet.module.scss"
import React from "react"
import sharkHeader from "../../../static/shark_header.png"

export const HeaderSheet = ({ children, isBGPaused, setIsBGPaused }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className={styles.sharkBackground}>
        <SharkBackground isBGPaused={isBGPaused} />
      </div>
      <div className={styles.sharkHeader}>
        <img src={sharkHeader} alt={"GitShark"} />
        <PlayPauseBackground
          className={styles.playPauseIndexBtn}
          isPaused={isBGPaused}
          toggle={() => setIsBGPaused(v => !v)}
        />
      </div>
      <div className={styles.bodySheetSpacer}></div>
      <div className={styles.bodySheet}>
        {children}
        <div className={styles.termSheet}>
          <a href={"/"}>Home</a>
          <a href={"/terms"}>Terms and Conditions</a>
          <a href={"/privacy"}>Privacy Policy</a>
        </div>
        <div className={styles.disclaimer}>
          <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
        </div>
      </div>
    </div>
  )
}
