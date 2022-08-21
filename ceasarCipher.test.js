const cipher = require("./ceasarCipher")

test("Ceasar Cipher shifts all letters over one space", () => {
    expect(cipher("Hyrule! It will be MINE!")).toBe("Izsvmf! Ju xjmm cf NJOF!")
})