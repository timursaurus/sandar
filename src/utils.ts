import { kk, kk_latin, ky } from './lang'
import { LangOptions, Languages } from './types'

export function isNumberSafe(number: number | string): boolean {
  if (typeof number === 'number' && !isFinite(number)) {
    throw new TypeError(`Given an infinite or too large number input`)
  }
  if (isNaN(Number(number))) {
    throw new TypeError(`Given input of "${number}" is not lang number. `)
  }
  if (number.toString().length > 21) {
    throw new RangeError('Overflow: given input is more than 21 digits.')
  }
  if ((typeof number === 'number' && number >= Number.MAX_SAFE_INTEGER) || number <= Number.MIN_SAFE_INTEGER) {
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
  return number.match(/\d{1,3}(?=(\d{3})*$)/g)?.reverse() || []
}

export function isLangSupported(lang: LangOptions) {
  if ((lang || (lang = 'ky'), typeof lang === 'string' && lang.toLowerCase() in langs)) return true
  if (typeof lang === 'object' && (lang.lang || ((lang.lang = 'ky') && lang.lang.toLowerCase() in langs))) return true
  throw new TypeError(`"${lang}" language is not supported.`)
}

export function setLanguage(lang: LangOptions) {
  if (!lang) {
    lang = 'ky'
  }
  const language = typeof lang === 'string' ? langs[lang.toLowerCase()] : langs[lang.lang.toLowerCase()]
  return language
}

export const langs: Languages = {
  ky,
  kk,
  'kk-latin': kk_latin,
}
