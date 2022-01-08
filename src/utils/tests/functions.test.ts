import { generateRandomString, isValidEmail } from "utils/functions";

describe("Test util functions", () => {
  it("[Generate Random String] Should return a string with default length of 12", () => {
    expect(generateRandomString()).toHaveLength(12);
  });

  it("[Generate Random String] Should return the correct length", () => {
    expect(generateRandomString(8)).toHaveLength(8);
  });

  it("[Generate Random String] Should return at least one upper case letter, one number and one special character when password", () => {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const numbers = "0123456789".split("");
    const specialChars = "!@#$%&*()".split("");

    const password = generateRandomString(12, true);

    const haveUpper =
      upperCase.filter((letter) => password.indexOf(letter) > -1).length > 0;
    const haveNumber =
      numbers.filter((letter) => password.indexOf(letter) > -1).length > 0;
    const haveSpecial =
      specialChars.filter((letter) => password.indexOf(letter) > -1).length > 0;

    expect(haveUpper).toBe(true);
    expect(haveNumber).toBe(true);
    expect(haveSpecial).toBe(true);
  });

  it("[Is Valid Email] Should correctly validate emails", () => {
    expect(isValidEmail(undefined as unknown as string)).toBe(false);
    expect(isValidEmail("@gmail.com")).toBe(false);
    expect(isValidEmail("seletogmail.com")).toBe(false);
    expect(isValidEmail("seleto@gmail.")).toBe(false);
    expect(isValidEmail("seleto@.com")).toBe(false);

    expect(isValidEmail("seleto@gmail.com")).toBe(true);
    expect(isValidEmail("seleto@gmail.com.br")).toBe(true);
    expect(isValidEmail("contato@seleto.me")).toBe(true);
  });
});
