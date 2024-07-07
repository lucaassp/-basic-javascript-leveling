console.log('Initial program!')

let number = prompt('Insert number: ')

function multiplicationTable(num) {
  for (i = 0; i <=10; i++) {
    console.log(num + " x " + i + ": " + (num * i))
  }
}

multiplicationTable(number)

