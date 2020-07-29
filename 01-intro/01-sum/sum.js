function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Params expected type 'number'");
  }
  return a + b;
}

module.exports = sum;
