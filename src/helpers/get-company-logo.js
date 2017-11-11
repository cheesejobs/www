/* global URL */

const isClientSide = typeof window !== `undefined`
const FALLBACK_LOGO = 'fallback.gif'

const getLogoUrl = company => `${new URL(company.url).hostname}.png`

export default company =>
  `/img/logo/${isClientSide ? getLogoUrl(company) : FALLBACK_LOGO}`
