// Function 1: calculateTax
function calculateTax(amount) {
    return amount * 0.10; // 10% tax
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Function 3: findMaximum
function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Function 4: isPalindrome
function isPalindrome(word) {
    // Remove non-alphanumeric characters and convert to lowercase for accurate check
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice * (1 - discountPercentage / 100);
}

// Examples
console.log(calculateTax(200));
console.log(convertToUpperCase("hello"));
console.log(findMaximum(10, 20));
console.log(isPalindrome("Racecar"));
console.log(calculateDiscountedPrice(100, 20));


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };