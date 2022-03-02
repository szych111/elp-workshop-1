import { rpn } from "./rpn";

describe("rpn()", () => {
  it("adds correctly two numbers", () => {
    expect(rpn("13+")).toBe(4);
  });


it("correctly muliplies two numbers", () => {
  expect(rpn("22*4/")).toBe(1);
});


it("correctly devides number by number", () => {
  expect(rpn("22/")).toBe(1);
});


it("correctly performs multiple operations", () => {
  expect(rpn("434+51+2*++")).toBe(23);
});

it("throws an error when called with no numbers", () => {
  expect(() => {rpn("+-*")}).toThrow("Invalid Expression");})
});
