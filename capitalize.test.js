const capitalize = require("./capitalize")

test('arowana becomes Arowana', () => {
    expect(capitalize('arowana')).toBe("Arowana")
})