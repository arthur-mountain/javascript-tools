function cloneObj(obj, cache = new WeakMap()) {
  // 基本型別 or function
  if (obj === null || typeof obj !== 'object') return obj

  // Date or RegExp
  if (obj instanceof Date || obj instanceof RegExp) return obj.constructor(obj)

  // check cache
  if (cache.has(obj)) return cache.get(obj)

  // 使用原物件的 constructor
  const copy = new obj.constructor()

  // 先放入 cache 中，每次都把 obj 放入，目的：讓第 12 行能檢查是否為循環引用
  cache.set(obj, copy);

  // 取出所有一般屬性 & 所有 key 為 symbol 的屬性
  [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)].forEach(key => {
    /**
     * 每次在第 15 行都會把 obj 存入快取，
     * 如果遇到循環引用，例如 a['x'] = a 時，因為 a 已經被存入快取，
     * 而 a['x'] === a ，所以會直接返回第 12 行的 cache.get(obj)
     */
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

export default cloneObj;