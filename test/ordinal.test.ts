//@ts-nocheck

import { expect, it, describe } from 'vitest'
import { toOrdinal } from '../src/ordinal'

describe('Ordinal', () => {
  const tests = [
    { input: '10', output: 'онунчу' },
  ]

  for (let test of tests) {
    it(test.input, () => {
      expect(toOrdinal(test.input)).eq(test.output)
    })
  }
})