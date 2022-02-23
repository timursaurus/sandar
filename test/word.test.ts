//@ts-nocheck

import { expect, it, describe } from 'vitest'
import { toWord } from '../src/word'

describe('Base Test', () => {
  const tests = [
    { input: '10', output: 'он' }
  ]

  for (let test of tests) {
    it(test.input, () => {
      expect(toWord(test.input)).eq(test.output)
    })
  }
})