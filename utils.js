'use strict'

const ret = result => ({result})

const createShouldTakeByType = type => {
  switch (typeof type) {
    case 'string':
      return (a, b) =>
        typeof a === type && typeof b === type
    case 'function':
      return (a, b) =>
        a instanceof type && b instanceof type
    default:
      const isProto = ({}).isPrototypeOf.bind(type)
      return (a, b) =>
        isProto(a) && isProto(b)
  }
}

module.exports = {ret}
