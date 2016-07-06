import { assert } from "chai";
import calculator from "../src/calculator";

describe("Calculator", function() {
    describe("should sum", function() {
        it("natural numbers", function() {
            assert.equal(3, calculator.sum(1, 2));
        });
        it("negative numbers", function() {
            assert.equal(2, calculator.sum(-1, 2, -3, 4));
        });
        it("0 number", function() {
            assert.equal(0, calculator.sum(0));
        });
    });
});