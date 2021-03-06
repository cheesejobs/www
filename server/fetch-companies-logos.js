'use strict'

const streamToPromise = require('stream-to-promise')
const { createWriteStream } = require('fs')
const path = require('path')
const { URL } = require('url')
const got = require('got')

const fetchLogo = hostname =>
  got
    .stream(`https://logo.clearbit.com/${hostname}?size=128`)
    .pipe(createWriteStream(path.resolve(`static/img/logo/${hostname}.png`)))

module.exports = urls =>
  Promise.all(
    urls.map(url => streamToPromise(fetchLogo(new URL(url).hostname)))
  )
