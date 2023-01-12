const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

export default function isValidPESEL(rawPesel: string | number): boolean {
  if (!rawPesel) {
    return false;
  }

  // convert to string
  const pesel = rawPesel.toString();

  // check if length is 11 digits
  if (pesel.length !== 11) {
    return false;
  }

  // calculate checksum
  let sum = 0;
  weights.forEach((weight, position) => {
    const digit = Number(pesel[position]);
    sum += weight * digit;
  });

  const checksum = (10 - (sum % 10)) % 10;

  return checksum === Number(pesel[10]);
}
