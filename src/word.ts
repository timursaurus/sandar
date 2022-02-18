import { LangOptions } from "./types";
import { isNumberSafe, toTriplets, langs, isLangSupported, removeComma } from "./utils";

/**
 * Returns the textual representation of a given number. 
 * Passing number as `string` is recommended.
 * @param number Accepts 123... and "123..."
 * @param lang Accepts [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. Kyrgyz language is set as default if not specified. 
 * @example
 * toWord(123) //=> 'жүз жыйырма үч'
 * toWord(456, { lang: 'ky' }) //=> 'төрт жүз элүү алты'
 * toWord('789', 'kk-latin') //=> 'jetı jüz seksen toğyz'
 */
export function toWord(number: string | number, lang: LangOptions = 'ky'): string {
  const language = typeof lang === 'string' ? langs[lang.toLowerCase()] : langs[lang.lang.toLowerCase()]
  if (Math.abs(Number(number)) === 0) return language.Zero
  function convert(number: number): string {
    function parseTens(number: number): string {
      const tens = Math.floor(number / 10)
      const rem = number % 10 > 0 ? `${language.Ones[number % 10]}` : ''
      return tens ? `${language.Tens[tens] ? language.Tens[tens] : ''} ${rem}` : rem
    }
    function parseHundreds(number: number): string {
      const hundreds = Math.floor(number / 100)
      const rem = number % 100 > 0 ? parseTens(number % 100) : ''
      return hundreds > 1 ? rem ? `${language.Ones[hundreds]} ${language.Hundred} ${rem}` : `${language.Ones[hundreds]} ${language.Hundred}` : `${language.Hundred} ${rem}`
    }
    return number >= 100 ? parseHundreds(number) : parseTens(number)
  }
  function generate(): string {
    number = removeComma(number)
    const triplets = toTriplets(Number(number).toString())
    let words: string[] = []
    if (isNumberSafe(number) && isLangSupported(typeof lang === 'string' ? lang : lang.lang)) {
      triplets.forEach((word, index) => {
        if (parseInt(word) !== 0) {
          word = convert(parseInt(word)).trim()
          if (word) words.push(`${word} ${language.Triplets[index + 1]}`)
        }
      })
    }
    return words.reverse().join(' ').trim()
  }
  return (number < 0 ? `${language.Negative} ` : '') + generate()
}