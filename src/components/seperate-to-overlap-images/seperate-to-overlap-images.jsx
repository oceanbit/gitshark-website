import * as React from "react"
import { useWindowSize } from "../../hooks"
import * as styles from "./seperate-to-overlap-images.module.scss"
import * as polylinearScale from "polylinear-scale"

import { ThemeContext } from "../../constants/theme-context"

// The value things should stop at
const max = 960
// The value things should stop at
const min = 600

/**
 * When at `min`, these are the values that should be applied
 */
const minLeftImageTop = -28
let minLeftImageLeft = 36
const minRightImageTop = 28
let minRightImageRight = 36
/**
 * When at `max`, these are the values that should be applied
 */
const maxLeftImageTop = 0
const maxLeftImageLeft = 48
const maxRightImageTop = 0
const maxRightImageRight = 48

const maxLeftImageTopLinearFn = polylinearScale(
  [min, max],
  [minLeftImageTop, maxLeftImageTop],
  true
)
const maxLeftImageLeftLinearFn = polylinearScale(
  [min, max],
  [minLeftImageLeft, maxLeftImageLeft],
  true
)
const maxRightImageTopLinearFn = polylinearScale(
  [min, max],
  [minRightImageTop, maxRightImageTop],
  true
)
const maxRightImageRightLinearFn = polylinearScale(
  [min, max],
  [minRightImageRight, maxRightImageRight],
  true
)

export const SeperateToOverlapImages = () => {
  const { colorMode } = React.useContext(ThemeContext)
  const { innerWidth } = useWindowSize()

  /**
   * Do calculations for the top, left, and right props
   */
  const [leftImageTop, setLeftImageTop] = React.useState(maxLeftImageTop)
  const [leftImageLeft, setLeftImageLeft] = React.useState(maxLeftImageLeft)
  const [rightImageTop, setRightImageTop] = React.useState(maxRightImageTop)
  const [rightImageRight, setRightImageRight] = React.useState(maxRightImageRight)

  React.useEffect(() => {
    setLeftImageTop(maxLeftImageTopLinearFn(innerWidth));
    setLeftImageLeft(maxLeftImageLeftLinearFn(innerWidth));
    setRightImageTop(maxRightImageTopLinearFn(innerWidth));
    setRightImageRight(maxRightImageRightLinearFn(innerWidth));
  }, [innerWidth])

  return (
    <div
      className={styles.container}
      style={{ marginTop: -1 * leftImageTop, marginBottom: rightImageTop - 70 }}
    >
      <img
        className={`${styles.image} ${styles.leftImage}`}
        style={{
          top: leftImageTop,
          left: leftImageLeft,
          opacity: colorMode === "dark" ? 1 : 0,
        }}
        src={"/history_tree_dark.png"}
        alt={"A GitShark feature that allows you to see your commit history throughout a project"}
        aria-hidden={colorMode !== "dark"}
      />
      <img
        className={`${styles.image} ${styles.leftImage}`}
        style={{
          top: leftImageTop,
          left: leftImageLeft,
          opacity: colorMode === "light" ? 1 : 0,
        }}
        src={"/history_tree_light.png"}
        alt={"A GitShark feature that allows you to see your commit history throughout a project"}
        aria-hidden={colorMode !== "light"}
      />
      <img
        className={`${styles.image} ${styles.rightImage}`}
        style={{
          top: rightImageTop,
          right: rightImageRight,
          opacity: colorMode === "dark" ? 1 : 0,
        }}
        src={"/commit_details_dark.png"}
        alt={"In depth commit history embedded directly in the GitShark app"}
        aria-hidden={colorMode !== "dark"}
      />
      <img
        className={`${styles.image} ${styles.rightImage}`}
        style={{
          top: rightImageTop,
          right: rightImageRight,
          opacity: colorMode === "light" ? 1 : 0,
        }}
        src={"/commit_details_light.png"}
        alt={"In depth commit history embedded directly in the GitShark app"}
        aria-hidden={colorMode !== "light"}
      />
    </div>
  )
}
