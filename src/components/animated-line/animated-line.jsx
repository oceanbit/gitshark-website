import * as React from "react"
import "./animated-line.scss"

// Make new export in @reach-ui/auto-id
let id = 0;
export const genId = () => ++id;

export const AnimatedLine = ({ className = "" }) => {
  const id = genId();
  return (
    <svg width="100%" className={`animatedLine ${className}`}>
      <defs>
        <linearGradient
          id={`e${id}`}
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="transparent" offset="0" />
          <stop stop-color="var(--on_surface)" offset="0.2" />
          <stop stop-color="var(--on_surface)" offset="0.8" />
          <stop stop-color="transparent" offset="1" />
        </linearGradient>
      </defs>
      <line x1="0" y1="10" x2="100%" y2="10" stroke={`url(#e${id})`} />
    </svg>
  )
}