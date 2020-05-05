import * as React from "react"
import { useId } from "@reach/auto-id";
import "./animated-line.scss"
import { useReduceMotion } from "../../hooks/useReduceMotion"

export const AnimatedLine = ({ className = "", isBGPaused }) => {
  const prefersReducedMotion = useReduceMotion()

  const classAppend = prefersReducedMotion || isBGPaused ? '' : 'doAnimate';
  const id = useId();
  return (
    <svg width="100%" className={`animatedLine ${classAppend} ${className}`} aria-hidden={true}>
      <defs>
        <linearGradient
          id={`e${id}`}
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="transparent" offset="0" />
          <stop stopColor="var(--on_surface)" offset="0.2" />
          <stop stopColor="var(--on_surface)" offset="0.8" />
          <stop stopColor="transparent" offset="1" />
        </linearGradient>
      </defs>
      <line x1="0" y1="10" x2="100%" y2="10" stroke={`url(#e${id})`} />
    </svg>
  )
}
