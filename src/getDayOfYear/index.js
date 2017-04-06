import toDate from '../toDate/index.js'
import startOfYear from '../startOfYear/index.js'
import differenceInCalendarDays from '../differenceInCalendarDays/index.js'

/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link docs/toDate}
 * @returns {Number} the day of year
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
export default function getDayOfYear (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions)
  var diff = differenceInCalendarDays(startOfYear(date, dirtyOptions), date, dirtyOptions)
  var dayOfYear = diff + 1
  return dayOfYear
}
