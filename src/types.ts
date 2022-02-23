export type LangOptions = Options | { lang: Options }

export type Options = 'ky' | 'kk' | 'kk-latin'

type Decimal = { [key: number]: string }

export interface Language {
  Zero: string
  Hundred: string
  Negative: string
  Point: string
  Ones: Decimal
  Tens: Decimal
  Triplets: Decimal
  OnesOrdinal: Decimal
  TensOrdinal: Decimal
  TripletsOrdinal: Decimal
}

export type Languages = { [key: string]: Language }
