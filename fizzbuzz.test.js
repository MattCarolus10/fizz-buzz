import {fizzbuzz} from "./fizzbuzz.js";
import assert from'node:assert';
import {test, describe} from 'node:test'

describe("Division by 3", () => {
    test('3 returns fizz', () => {
        assert.equal(fizzbuzz(3), "fizz")
    })
})