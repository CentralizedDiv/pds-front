export function generateRandomString(
  length: number = 12,
  password: boolean = true
) {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%&*()";
  const characters = upperCase + lowerCase + numbers + specialChars;
  const charactersLength = characters.length;

  let result = "";
  let haveUpper = false;
  let haveSpecial = false;
  let haveNumber = false;
  for (let i = 0; i < length; i++) {
    let charToAdd = characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
    if (password) {
      if (i >= length - 3) {
        let charsToLook;
        if (!haveUpper) charsToLook = upperCase;
        if (!haveSpecial) charsToLook = specialChars;
        if (!haveNumber) charsToLook = numbers;
        if (charsToLook)
          charToAdd = charsToLook.charAt(
            Math.floor(Math.random() * charsToLook.length)
          );
      }

      if (upperCase.includes(charToAdd)) haveUpper = true;
      if (specialChars.includes(charToAdd)) haveSpecial = true;
      if (numbers.includes(charToAdd)) haveNumber = true;
    }

    result += charToAdd;
  }
  return result;
}

export function isValidEmail(email: string) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    email
  );
}
