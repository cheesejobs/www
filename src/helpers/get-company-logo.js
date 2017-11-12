import getUrlDomain from './get-url-domain'
export default company => `/img/logo/${getUrlDomain(company.url)}.png`
