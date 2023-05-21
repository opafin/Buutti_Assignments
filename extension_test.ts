declare global {
  interface Array<T> {
    /**
     * Splices an array at a given index.
     *
     * Returns the value at that index, rather than an array.
     */
    precisionSplicer(index: number): T | undefined
  }
}

Array.prototype.precisionSplicer = function <T>(this: T[], index: number): T | undefined {
  if (index >= 0 && index < this.length) {
    const result = this.splice(index, 1)[0]
    return result || undefined
  }
}

// better practice would be using a function that takes an array as a parameter
// but it's fun to test this, as we we're just studying prototypes

declare global {
  interface Array<T> {
    /**
     * Returns the last index of the array.
     *
     * Alternate to `${Array.length -1}`
     */
    lastIndex(): number
  }
}
Array.prototype.lastIndex = function <T>(this: T[]): number {
  const result: number = this.length - 1
  return result
}

export = (Array.prototype.precisionSplicer, Array.prototype.lastIndex)
