// * Write a function that returns the product of 2 numbers
function product(x, y) {
  // Bonus
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  // Main
  return x * y;
}

// * Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0;
}

// * Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}

// * Return the largest of 3 numbers

function maxOfThreeNumbers(a, b, c) {
  // Bonus
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return false;
  } else {
    // Main
    return Math.max(a, b, c);
  }
}

// * Calculate the sum of an array of numbers
// ! Hay algun error con el orden o la sintaxis que por separado funcionan pero juntos no.
function sumArray(numbers) {
  // Bonus
  if (numbers !== "array") {
    return false;
  }
  // Main
  return numbers.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
}

// * Return the largest number of a non-empty array
// ! Hay algun error con el orden o la sintaxis que por separado funcionan pero juntos no.
function maxOfArray(numbers) {
  // Bonus
  if (numbers !== "array") {
    return false;
  }
  // Main
  return Math.max(...numbers); // Math.max + spread operator
}

// * Return the longest string in an array
function longestString(strings) {
  let longest = strings.sort(function (a, b) {
    return b.length - a.length;
  })[0];
  return longest;
}

// * Return whether a word is in an array
// Para saber si X palabra se encuentra en la array usaremos un for loop
function doesWordExist(wordsArr, word) {
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
      return true;
    } else {
      return false;
    }
  }
}

// ! Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false;
  }
}

// * Get the fullName from the object
// { firstName: 'Tony', lastName: 'Stark'}
// ! Hay algun error con el orden o la sintaxis que por separado funcionan pero juntos no.
function getFullName(personObj) {
  // Bonus
  if (personObj !== "object") {
    return false;
  }
  // Main
  return personObj.firstName + " " + personObj.lastName;
}

// ! Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {}
