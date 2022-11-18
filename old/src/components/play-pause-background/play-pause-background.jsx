import * as React from 'react';
import './play-pause-background.scss';
import { useReduceMotion } from "../../hooks/useReduceMotion"

export const PlayPauseBackground = ({className = '', toggle, isPaused}) => {
  const prefersReducedMotion = useReduceMotion()

  if (prefersReducedMotion) return null;

  return <button onClick={toggle} className={`playPauseBtn ${className}`}>
    <span aria-hidden={true} className={`playPauseIcon ${!isPaused ? 'paused' : ''}`}/>
    <span className={"playPauseTxt"}>
    <span aria-hidden={!isPaused} className={"playTxt"} style={{opacity: isPaused ? 1 : 0}}>
      Play motion
    </span>
    <span aria-hidden={isPaused}  style={{opacity: isPaused ? 0 : 1}}>
      Pause motion
    </span>
      </span>
  </button>
}
