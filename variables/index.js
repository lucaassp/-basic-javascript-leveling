// JavaScript, unlike Java, has its dynamic typing, 
// that is, JS itself is able to know what 
// type is the value assigned to the variable and 
// do the automatic casting.

let name = 'Lucas'; // Let variables can be updated, but cannot be declared again. - Primitive type string
var name2 = 'João'; // Var has fallen into disuse - primitive type string
const name3 = 'Pedro'; // Const variables cannot be updated or redeclared. - Primitive type string
console.log(typeof(name3)); // Returns a string
const number = 1000; // Primitive type number
console.log(typeof(number)); // Returns a number
let approved = true; // Primitive type Boolean
let lastName = undefined; // Primitive type Undefined
let selectedColor = null; // Primitive type null - Reset a value

console.log(name,name2, 'e', name3);
