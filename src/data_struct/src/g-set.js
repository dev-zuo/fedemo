class Set {
  constructor() {
    this.items = {}
  }

  has(element) {
    return element in this.items
    // return this.items.hasOwnProperty(element)
    // return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  add(element) {
    if (this.has(element)) {
      return false
    }
    this.items[element] = element
    return true
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  clear() {
    this.items = {}
  }

  size() {
    return Object.keys(this.items).length
    // let keys = []
    // for (key in this.items) {
    //   if (this.items.hasOwnProperty(key)) {
    //     keys.push(key)
    //   }
    // }
    // return keys.length
  }

  values() {
    return Object.values(this.items)
    // let values = []
    // for (key in this.items) {
    //   if (this.items.hasOwnProperty(key)) {
    //     values.push(this.items[key])
    //   }
    // }
    // return values
  }

  union(otherSet) {
    let unionSet = new Set()
    this.values().forEach((item) => unionSet.add(item))
    otherSet.values().forEach((item) => unionSet.add(item))
    return unionSet
  }

  intersection(otherSet) {
    let intersectionSet = new Set()
    // 使用比较小的集合来遍历
    let curValues = this.values()
    let otherValues = otherSet.values()
    let smallerSet = curValues
    let biggerSet = otherValues
    if (curValues.length > otherValues.length) {
      smallerSet = otherValues
      biggerSet = curValues
    }
    smallerSet.forEach((item) => {
      if (biggerSet.includes(item)) {
        intersectionSet.add(item)
      }
    })
    return intersectionSet
  }

  difference(otherSet) {
    let differenceSet = new Set()
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    for (let i = 0, len = this.size(); i < len; i++) {
      if (!otherSet.has(this.values()[i])) {
        return false
      }
    }
    return true
  }
}

module.exports = Set
