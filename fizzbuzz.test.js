import {fizzbuzz} from './fizzbuzz.js';
import assert from'node:assert';
import {test, describe} from 'node:test';

describe("Division by 3", () => {

    test('3 returns fizz', () => {
        assert.equal(fizzbuzz(3), "fizz")
    })
})

describe("Division by 5", () => {

    test("5 return buzz", () => {
        assert.equal(fizzbuzz(5), "buzz")
    })
    
})

test("10 return buzz", () => {
    assert.equal(fizzbuzz(10), "buzz")
})

test("95 return buzz", () => {
    assert.equal(fizzbuzz(95), "buzz")
})

describe("division by 3 and 5", () => {

    test("15 return fizzbuzz", () => {
        assert.equal(fizzbuzz(15), "fizzbuzz")
    })

    test("30 return fizzbuzz", () => {
        assert.equal(fizzbuzz(30), "fizzbuzz")
    })

    test("90 return fizzbuzz", () => {
        assert.equal(fizzbuzz(90), "fizzbuzz")
    })
})

describe("returning the number as a string", () => {

    test('1 return "1"', () => {
        assert.equal(fizzbuzz(1), "1")
})

    test('4 return "4"', () => {
        assert.equal(fizzbuzz(4), "4")
    })

    test('91 return "91"', () => {
        assert.equal(fizzbuzz(91), "91")
    })
})

