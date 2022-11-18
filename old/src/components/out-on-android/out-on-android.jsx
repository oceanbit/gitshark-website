import React from "react"
import { ThemeContext } from "../../constants/theme-context"
import styles from "./out-on-android.module.scss"
import androidDark from "../../../static/android_beta_dark.png"
import androidLight from "../../../static/android_beta_light.png"

export const OutOnAndroid = () => {
  const { colorMode } = React.useContext(ThemeContext)

  return (
    <div className={styles.betaContainer}>
      <div className={styles.imageContainer}>
        <div style={{position: 'relative'}}>
          <img
            className={`${styles.image}`}
            style={{
              opacity: colorMode === "dark" ? 1 : 0
            }}
            src={androidDark}
            alt={
              ""
            }
            aria-hidden={colorMode !== "dark"}
          />
          <img
            className={`${styles.image} ${styles.secondImage}`}
            style={{
              opacity: colorMode === "light" ? 1 : 0
            }}
            src={androidLight}
            alt={
              ""
            }
            aria-hidden={colorMode !== "light"}
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.betaOutHeader}>GitShark beta is out!</h2>
        <p className={styles.androidUsers}>Android users, you’re up.</p>
        <p className={styles.androidExplain}>Manage repositories, checkout & merge branches, view & commit changes and
          much more, right from your Android
          device.</p>
        <a
          href="https://play.google.com/store/apps/details?id=dev.oceanbit.gitshark&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img
          className={styles.playLogo} alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"/></a>
        <p className={styles.disclaimer}>
          Available for all devices running Android 5.0 and up.
        </p>
      </div>
    </div>
  )
}
