import { hiku } from "../src/ts/sampleFuncion";

describe("sampleFunctionのテスト", () => {
  test("sample1", () => {
    expect(hiku(2, 1)).toBe(1);
  });

  test("sample2", () => {
    expect(hiku(1, 2)).toBe(-1);
  });
});
