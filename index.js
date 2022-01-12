
let input = Number(prompt("ENTER AMOUNT"));

let myCur = Number(prompt("ENTER PREFERRED NOTES"));
let array = [500, 100, 50, 20, 10, 5, 1];
let coins = [];
let calculation = 0;

let ar = [];
for (var i = 0; i < 200; i++) {
  if (calculation < input) {
    ar.push(myCur);
    calculation = calculation + myCur;
  } else {
    break;
  }
}
coins.push(ar);

for (let i = 0; i < array.length; i++) {
  if (array[i] === myCur) {
    array.splice(i, 1);
  }
}
console.log(calculation);

if (calculation < input) {
  for (let i = 0; i < array.length; i++) {
    let ar = [];
    for (let j = 0; j < 200; j++) {
      if (calculation + array[i] <= input) {
        ar.push(array[i]);
        calculation = calculation + array[i];
        console.log(calculation);
      }
    }
    coins.push(ar);
  }
}
console.log(coins);
console.log(calculation);
