export function numbers (value) {
  return /^[1-9]+[0-9]*$/.test(value) || false;
}