const calculator = require("./calculator");

const mockCalc = {
    add: expect.any(Function),
    subtract: expect.any(Function),
    divide: expect.any(Function),
    multiply: expect.any(Function),
}

test("Calculator object with basic operations", () => {
    expect(calculator).toEqual(mockCalc)
});

test("Calculator addition test", () => {
    expect(calculator.add(8,4)).toBe(12);
});

test("Calculator subtraction test", () => {
    expect(calculator.subtract(8,6)).toBe(2);
});

test("Calculator multiplication test", () => {
    expect(calculator.multiply(3,9)).toBe(27);
})

test("Calculator division test", () => {
    expect(calculator.divide(200, 10)).toBe(20);
})