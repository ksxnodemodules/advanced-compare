'use strict'

class Comparator extends ComparatorBase {
  constructor (rules = []) {
    return {
      getRules: () => Array.from(rules),
      __proto__: this
    }
  }

  static create () {
    return new this()
  }

  prepend (shouldTake, compare) {
    return new this.constructor([
      {shouldTake, compare},
      ...this.getRules()
    ])
  }

  append (shouldTake, compare) {
    return new this.constructor([
      ...this.getRules(),
      {shouldTake, compare}
    ])
  }

  get compare () {
    const rules = this.getRules()

    const fn = (a, b) => {
      for (const {shouldTake, compare} of rules) {
        if (!shouldTake(a, b)) continue
        const res = compare(a, b, fn)
        if (res) return res
      }

      return null
    }

    return fn
  }
}

const createComparator = () => Comparator.create()

module.exports = {
  Comparator,
  createComparator
}
