const {
  describe,
  it,
  expect,
  matchers
} = require('./index')

let add = (a, b) =>  a + b
let subtract = (a, b) =>  a - b
let divide = (a, b) =>  a / b
let multiply = (a, b) => a * b

describe('Add()', () => {
  it('adds two numbers', () => {
    const result = add(3, 2)
    expect(result).toBe(5)
  })
})

describe('subtract()', () => {
  it('subtract two numbers', () => {
    const result = subtract(6, 2)
    expect(result).toBe(4)
  })
})

describe('multiply()', () => {
  it('multiplies two numbers', () => {
    const result = multiply(4, 5)
    expect(result).toBe(20)
  })
})

describe('divide()', () => {
  it('divides two numbers', () => {
    const result = divide(25, 5)
    expect(result).toBe(5)
  })
})
