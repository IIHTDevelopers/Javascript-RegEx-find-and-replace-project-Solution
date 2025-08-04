// Find and replace all occurrences of 'cat' with 'dog' in a string
let text = "The cat sat on the mat. The cat is very cute.";
let newText = text.replace(/cat/g, 'dog');
console.log(newText);  // "The dog sat on the mat. The dog is very cute."

// Using a regular expression to replace numbers with a placeholder
let textWithNumbers = "My number is 123-456-7890.";
let newTextWithNumbers = textWithNumbers.replace(/\d{3}-\d{3}-\d{4}/, 'XXX-XXX-XXXX');
console.log(newTextWithNumbers);  // "My number is XXX-XXX-XXXX."
