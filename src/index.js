const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];

export default function isValidPESEL(rawPesel) {
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
  for (let position = 0; position < weights.length; position += 1) {
    const weight = weights[position];
    const digit = parseInt(pesel[position], 10);
    sum += weight * digit;
  }

  const checksum = (10 - (sum % 10)) % 10;

  return checksum === parseInt(pesel[10], 10);
}
