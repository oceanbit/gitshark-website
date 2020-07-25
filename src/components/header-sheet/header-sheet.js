import { SharkBackground } from "../shark-background"
import { PlayPauseBackground } from "../play-pause-background"
import React from "react"

export const HeaderSheet = ({children, isBGPaused, setIsBGPaused}) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className={"sharkBackground"}>
        <SharkBackground isBGPaused={isBGPaused}/>
      </div>
      <div className={"sharkHeader"}>
        <img src="/shark_header.png" alt={"GitShark"}/>
        <PlayPauseBackground
          className={"playPauseIndexBtn"}
          isPaused={isBGPaused}
          toggle={() =>
            setIsBGPaused(v => !v)
          }
        />
      </div>
      <div className="bodySheet">
        {children}
      </div>
    </div>
  )
}
