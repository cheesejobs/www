import { distanceInWordsStrict, format, isWithinRange, subDays } from 'date-fns'

export default {
  ago: (date = new Date()) =>
    distanceInWordsStrict(new Date(), date, { addSuffix: true }),

  inLast24Hours: (date = new Date()) =>
    isWithinRange(date, subDays(new Date(), 1), new Date()),

  short: (date = new Date()) => format(date, 'MMMM DD')
}
