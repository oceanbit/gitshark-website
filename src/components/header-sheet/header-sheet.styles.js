import styled, { css } from "styled-components"
import { forDesktop } from "../../styles/utils"
import { PlayPauseBackground } from "../play-pause-background"
import { body_01, caption_02 } from "../../styles/old-font-styles"

export const SharkBackgroundContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`

const minHeaderSizeMobile = '500px';
const minHeaderSizeDesktop = '650px';
const headerSize = '55vh';

export const SharkHeader = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  img {
    max-width: 90%;
  }

  min-height: ${minHeaderSizeMobile};
  height: ${headerSize};


  ${forDesktop(css`
    min-height: ${minHeaderSizeDesktop};
  `)}
`

export const PlayPauseBackgroundStyled = styled(PlayPauseBackground)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(5vh + 1rem);
`

export const BodySheetSpacer = styled.div`
  min-height: ${minHeaderSizeMobile};
  height: ${headerSize};
  z-index: -11;


  ${forDesktop(css`
    min-height: ${minHeaderSizeDesktop};
  `)}
`

export const BodySheet = styled.div`
  margin: 0 auto;
  max-width: 960px;
  z-index: 10;
  position: relative;
  border-top-left-radius: var(--roundness);
  border-top-right-radius: var(--roundness);
  background: var(--floating_surface);
  padding: 72px 32px 72px;
  box-shadow: 0px 3px 3px rgba(19, 42, 88, 0.0196802),
  0px 7px 6px rgba(19, 42, 88, 0.03), 0px 13px 10px rgba(19, 42, 88, 0.04),
  0px 23px 18px rgba(19, 42, 88, 0.05), 0px 42px 34px rgba(19, 42, 88, 0.06);
`

export const TermSheet = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 3rem;
  
  ${body_01}
  
  ${forDesktop(css`
    padding-top: 144px;
  `)}

  a {
    text-decoration: none;
  }
`

export const Disclaimer = styled.div`
  ${caption_02}
  margin-top: 32px;
  text-align: center;
  color: var(--on_surface_secondary);
`
