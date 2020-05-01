import * as React from 'react';
import { useReduceMotion } from "react-reduce-motion"

export const PlayPauseBackground = ({toggle, isPaused}) => {
  const prefersReducedMotion = useReduceMotion()

  if (prefersReducedMotion) return null;

  return <button onClick={toggle}>{isPaused ? 'Play' : 'Pause'}</button>
}
