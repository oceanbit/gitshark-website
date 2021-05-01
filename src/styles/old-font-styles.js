const { css } = require("styled-components")

const sizeOfREM = 16;

export const display = css`
  font-weight: 700;
  font-size: ${48/ sizeOfREM}rem;
  line-height: ${64/ sizeOfREM}rem;
  font-family: "Rubik", sans-serif;
  margin: 0;
`

export const headline_01 = css`
  font-weight: 700;
  font-size: ${34/ sizeOfREM}rem;
  line-height: ${48/ sizeOfREM}rem;
  font-family: "Rubik", sans-serif;
  margin: 0;
`

export const headline_02  = css`
  font-weight: 700;
  font-size: ${28/ sizeOfREM}rem;
  line-height: ${36/ sizeOfREM}rem;
  font-family: "Rubik", sans-serif;
  margin: 0;
`

export const headline_03  = css`
  font-weight: 500;
  font-size: ${20/ sizeOfREM}rem;
  line-height: ${28/ sizeOfREM}rem;
  font-family: "Rubik", sans-serif;
  margin: 0;
`

export const callout  = css`
  font-weight: 500;
  font-size: ${16/ sizeOfREM}rem;
  line-height: ${24/ sizeOfREM}rem;
  font-family: "Rubik", sans-serif;
  margin: 0;
`

export const body_01  = css`
  font-weight: 400;
  font-size: ${16/ sizeOfREM}rem;
  line-height: ${24/ sizeOfREM}rem;
  font-family: "Rubik", sans-serif;
  margin: 0;
`

export const body_02  = css`
  font-weight: 400;
  font-size: ${14/ sizeOfREM}rem;
  line-height: ${20/ sizeOfREM}rem;
  font-family: "Rubik", sans-serif;
  margin: 0;
`

export const caption_01  = css`
  font-weight: 500;
  font-size: ${12/ sizeOfREM}rem;
  line-height: ${16/ sizeOfREM}rem;
  font-family: "Rubik", sans-serif;
  margin: 0;
`

export const caption_02  = css`
  font-weight: 400;
  font-size: ${12/ sizeOfREM}rem;
  line-height: ${16/ sizeOfREM}rem;
  font-family: "Rubik", sans-serif;
  margin: 0;
`

export const code = css`
  font-weight: 400;
  font-family: "Roboto Mono", monospace;
  font-size: ${12/ sizeOfREM}rem;
  line-height: ${20/ 16}rem;
  margin: 0;
`
