function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throw an error for better handling
  }
  return a + b;
}

// Or, returning null:
function foo2(a, b) {
  if (a === null || b === null) {
    return null; //Return null to indicate failure
  }
  return a + b;
}
console.log(foo(null, 5)); // Throws an error
console.log(foo(5, null)); // Throws an error
console.log(foo(5, 5)); // Output: 10
console.log(foo2(null,5)); //Output: null