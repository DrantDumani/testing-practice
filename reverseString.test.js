const reverseString = require("./reverseString")

test("Cobra Commander becomes rednammoc arboC", () => {
    expect(reverseString("Cobra Commander")).toBe("rednammoC arboC")
})