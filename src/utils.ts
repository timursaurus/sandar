import { kk, kk_latin, ky } from "./lang"
import { Languages } from "./types"

export function isNumberSafe(number: number | string): boolean {
  if (typeof number === 'number' && !isFinite(number)) {
    throw new TypeError(`Given an infinite or too large number input`)
  }
  if (isNaN(Number(number))) {
    throw new TypeError(`Given input of "${number}" is not a number. `)
  }
  if (number.toString().length > 21) {
    throw new RangeError('Overflow: given input is more than 21 digits.')
  }
  if (typeof number === 'number' && number >= Number.MAX_SAFE_INTEGER || number <= Number.MIN_SAFE_INTEGER) {
    console.log(`Warning: Precision may be lost for the given input of ${number}. Passing numbers as string is recommended.`)
  }
  return true
}

export function removeComma(number: string | number) {
  if (typeof number === 'string') {
    number = number.replace(/[, ]/g, '')
  }
  return number
}

export function toTriplets(number: string): string[] {
  let numberArr = number.match(/\d{1,3}(?=(\d{3})*$)/g)?.reverse() || []
  return numberArr
}

export function isLangSupported(lang: string) {
  if (lang = lang.toLowerCase(), lang in langs) return true
  else throw new TypeError(`"${lang}" language is not supported.`)
}

export const langs: Languages = {
  ky,
  kk,
  'kk-latin': kk_latin
}
