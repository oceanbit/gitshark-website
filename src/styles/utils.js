import { css } from "styled-components"

export const mobileBreakpoint = "600px"

export function until(breakpoint, contents) {
  return css`
    @media screen and (max-width: ${breakpoint}) {
      ${contents};
    }
  `
}

export function from(breakpoint, contents) {
  return css`
    @media screen and (min-width: ${breakpoint}) {
      ${contents};
    }
  `
}

export function forMobile(contents) {
  return until(mobileBreakpoint, contents)
}

export function forDesktop(contents) {
  return from(mobileBreakpoint, contents)
}
