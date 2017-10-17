import { css } from 'styled-components'

const SIZES = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 480
}

const Responsive = Object.keys(SIZES).reduce(
  (accumulator, label) =>
    Object.assign(accumulator, {
      [label]: (...args) => css`
        @media (max-width: ${SIZES[label] / 16}rem) {
          ${css(...args)};
        }
      `
    }),
  {}
)

export default Responsive
