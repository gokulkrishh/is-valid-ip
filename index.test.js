const isValidIP = require("./index");

describe("is-valid-ip", () => {
  it("valid ip address", () => {
    expect(isValidIP("0.0.0.0")).toBe(true);
    expect(isValidIP("12.255.56.1")).toBe(true);
    expect(isValidIP("137.255.156.100")).toBe(true);
  });

  it("invalid ip address", () => {
    expect(isValidIP("")).toBe(false);
    expect(isValidIP("1e0.1e1.1e2.2e2")).toBe(false);
    expect(isValidIP("12.34.56.-7")).toBe(false);
    expect(isValidIP("\n1.2.3.4")).toBe(false);
    expect(isValidIP("01.02.03.04")).toBe(false);
  });
});
