const num = [10, 20, 30, 40, 50,60,42,43,54,34];
num.push(45)
num.unshift(34)
num.pop()
num.splice(3,4)

// const total = num.reduce((accumulator, currentValue) => {
//   return accumulator - currentValue;
// }, 0);

// console.log(total);

// const arr=[34,10,20,42,43,54,34];
// const total2 = arr.reduce((accumulator, currentValue) => {
//   return accumulator - currentValue;
// }, 0);

// console.log(total2);


function divide(number){
    return number-5
}

const arr2=num.map(divide);
console.log(arr2);9-p
