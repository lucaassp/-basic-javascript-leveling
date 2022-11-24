// An Array can store many values ​​under a single name, and you can access the values ​​by querying an index number.
let arrayCustom = ['Lucas', 'Caio', 'Leticia', 15, 98.7, true, undefined, null];
console.log(arrayCustom);
console.log(typeof(arrayCustom)); // Arrays are objects

let car = ['fiat', 'vw', 'chevrolet', 'renault']; 
console.log(car);
console.log(typeof(car)); // Arrays are objects

// Array Property and Methods - Exemple
let sizeArray = car.length;
console.log(sizeArray);

let sortedArray = car.sort();
console.log(sortedArray);

car.push('toyota');
console.log(car)



