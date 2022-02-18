import { toWord, toOrdinal } from ".";
import { LangOptions } from "./types";
import { isLangSupported } from "./utils";

export class Sandar {
  #language: LangOptions
  /** 
   * Creates an instance of Sandar. All methods will use specified language.
   * @param language Accepts [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format. Kyrgyz `ky` language is set as default if not specified.
   * @example
   * const san = new Sandar('kk-latin')
   * san.toWord(123) //=> 'jüz jiyrma üş'
   */
  constructor(language: LangOptions = 'ky') {
    if (isLangSupported(typeof language === 'string' ? language : language.lang)) {}
    this.#language = typeof language === 'string' ? language : language.lang
  }
  /**
   * Returns the text representation of a given number.
   * @param number Accepts `123` and `"123"`
   */
  toWord(number: string | number) {
    return toWord(number, this.#language)
  }
  /**
   * Returns the textual ordinal representation of a given number.
   * @param number Accepts `123` and `"123"`
   */
  toOrdinal(number: string | number) {
    return toOrdinal(number, this.#language)
  }
  /** Returns current set language. */
  get lang() {
    return this.#language
  }
  /** You may set a new language */
  set lang(lang: LangOptions) {
    if (isLangSupported(lang.toString())) {
      this.#language = lang
    }
  }
}