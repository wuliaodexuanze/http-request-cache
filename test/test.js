"use strict"
const expect = require("chai").expect
const { HttpRequestCache } = require("../dist/index")

const testData = {
  name: 'xxx',
  value: 123,
  list: []
}

describe("HttpRequestCache test", () => {
  it("test set cache", () => {
    HttpRequestCache.set("testCache", testData)
    const result = HttpRequestCache.get('testCache')
    expect(result).to.equal(testData)
  })

  it("test delete cache", () => {
    HttpRequestCache.set("testCache", 1)
    HttpRequestCache.delete("testCache")
    const result = HttpRequestCache.get("testCache")
    expect(result).to.be.null
  })

  it("test has cache", () => {
    const result = HttpRequestCache.has("testCache")
    expect(result).to.be.false
  })
})
