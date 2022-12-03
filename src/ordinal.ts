import { LangOptions } from './types'
import { isNumberSafe, toTriplets, removeComma, setLanguage } from './utils'
import { toWord } from './word'

/**
 * Returns the textual ordinal representation of a given number.
 * Passing number as `string` is recommended.
 * @param number Accepts 123... and "123..."
 * @param lang Accepts [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. Kyrgyz language is set as default if not specified.
 * @example
 * toOrdinal(123) //=> 'жүз жыйырма үчүнчү'
 * toOrdinal(456, { lang: 'kk' }) //=> 'төрт жүз елу алтыншы'
 * toOrdinal('789', 'kk-latin') //=> 'jetı jüz seksen toğyzınşı'
 */
export function toOrdinal(number: number | string, lang: LangOptions = 'ky'): string {
  const language = setLanguage(lang)
  function parseHundreds(number: number) {
    let suffix = number % 10 ? language.OnesOrdinal[number % 10] : language.TensOrdinal[(number % 100) / 10]
    return (suffix = suffix ?? language.TripletsOrdinal[1]), suffix
  }
  function parseThousands(number: number | string) {
    const triplets = toTriplets(number.toString())
    const thousands = 0
    for (const triple of triplets) {
      if (parseInt(triple) === 0) { thousands + 1 }
      else { return thousands ? language.TripletsOrdinal[thousands + 1] : parseHundreds(Number(triple)) }
    }
  }
  function generateSuffix(number: number | string) {
    number = removeComma(number)
    if (isNumberSafe(number)) {
      if (Math.abs(Number(number)) === 0) { return language.TripletsOrdinal[0] }
      return 1e3 < number ? parseThousands(Number(number)) : parseHundreds(Number(number))
    }
  }
  return toWord(number, lang) + generateSuffix(number)
}
