import { SharkBackground } from "../shark-background"
import React from "react"
import sharkHeader from "../../../static/shark_header.png"
import {
  BodySheet,
  BodySheetSpacer, Disclaimer,
  PlayPauseBackgroundStyled,
  SharkBackgroundContainer,
  SharkHeader, TermSheet
} from "./header-sheet.styles"

export const HeaderSheet = ({ children, isBGPaused, setIsBGPaused }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <SharkBackgroundContainer>
        <SharkBackground isBGPaused={isBGPaused} />
      </SharkBackgroundContainer>
      <SharkHeader>
        <img src={sharkHeader} alt={"GitShark"} />
        <PlayPauseBackgroundStyled
          isPaused={isBGPaused}
          toggle={() => setIsBGPaused(v => !v)}
        />
      </SharkHeader>
      <BodySheetSpacer/>
      <BodySheet>
        {children}
        <TermSheet>
          <a href={"/"}>Home</a>
          <a href={"/terms"}>Terms and Conditions</a>
          <a href={"/privacy"}>Privacy Policy</a>
        </TermSheet>
        <Disclaimer>
          <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
        </Disclaimer>
      </BodySheet>
    </div>
  )
}
