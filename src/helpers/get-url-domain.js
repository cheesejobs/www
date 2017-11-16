export default url =>
  url
    .replace('http://', '')
    .replace('https://', '')
    .split(/[/?#]/)[0]
