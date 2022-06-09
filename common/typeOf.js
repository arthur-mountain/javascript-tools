export function simepleTypeOf(val) {
  if (typeof val === 'object') {
    if (Array.isArray(val)) return 'array'

    if (val === null) return 'null'

    return 'object'
  }

  return typeof val
}

function typeOf(val) {
  let type = typeof val

  if (type !== 'object') return type

  const typeStr = Object.prototype.toString.call(val)

  switch (typeStr) {
    case '[object Array]':
      type = 'array'
      break
    case '[object Null]':
      type = 'null'
      break
    case '[object RegExp]':
      type = 'regexp'
      break
    case '[object Map]':
      type = 'map'
      break
    case '[object Set]':
      type = 'set'
    case '[object WeakMap]':
      type = 'weakMap'
      break
    case '[object WeakSet]':
      type = 'weakSet'
    default:
      break
  }

  return type
}

export default typeOf