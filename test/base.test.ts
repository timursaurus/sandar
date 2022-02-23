//@ts-nocheck

import { expect, it, describe } from 'vitest'
import { toWord, } from '../src/word'
import { toOrdinal } from '../src/ordinal'

describe('Base Cardinal', () => {
  const tests = [
    { input: '10', output: 'он' },
    { input: '11', output: 'он бир', lang: 'ky' },
    { input: '12', output: 'он екi', lang: 'kk' },
    { input: '13', output: 'он үч', lang: null },
    { input: '14', output: 'он төрт', lang: '' },
    { input: '15', output: 'он беш', lang: undefined },
  ]

  for (let test of tests) {
    it(test.input, () => {
      expect(toWord(test.input, test.lang ?? test.lang)).eq(test.output)
    })
  }

})

describe('Base Ordinal', () => {
  const tests = [
    { input: '10', output: 'онунчу' },
    { input: '11', output: 'он биринчи', lang: 'ky' },
    { input: 11, output: 'on bırınşı', lang: 'kk-latin' },

  ]

  for (let test of tests) {
    it(test.input, () => {
      expect(toOrdinal(test.input, test.lang ?? test.lang)).eq(test.output)
    })
  }
})