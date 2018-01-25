'use strict'
const {ret, createShouldTakeByType} = require('./utils')
const {Comparator} = require('./base')

const opts = {
  shouldTake: () => true,

  compare: (a, b) => {
    if (a > b) return ret(1)
    if (a < b) return ret(-1)
    return ret(0)
  }
}

const number = {
  ...opts,
  shouldTake: createShouldTakeByType('number')
}

const string = {
  ...opts,
  shouldTake: createShouldTakeByType('string')
}

const rules = [number, string]
const basics = new Comparator(rules)
const before = base => new Comparator([...rules, ...base.getRules()])
const after = base => new Comparator([...base.getRules(), ...rules])

Object.assign(basics, {
  opts,
  number,
  string,
  rules,
  basics,
  before,
  after
})

module.exports = basics
