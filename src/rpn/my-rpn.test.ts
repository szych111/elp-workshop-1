import { myRpn } from "./my-rpn";

describe("myRpn()", () => {
    it("adds correctly two numbers", () => {
      expect(myRpn("13+")).toBe(4);
    });


  it("correctly muliplies two numbers", () => {
    expect(myRpn("22*4/")).toBe(1);
  });


  it("correctly devides number by number", () => {
    expect(myRpn("22/")).toBe(1);
  });
 

  it("correctly performs multiple operations", () => {
    expect(myRpn("434+51+2*++")).toBe(23);
  });

  it("throws an error when called with no numbers", () => {
    expect(() => {myRpn("+-*")}).toThrow("Invalid Expression");})
});
