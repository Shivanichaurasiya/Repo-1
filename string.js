var name = "        javascript     "
console.log(name.slice(-10,-6));


function greet(name, callback) {
  console.log('Hello, ' + name);
  callback();
}

function sayBye() {
  console.log('Goodbye!');
}

greet('Ravi', sayBye);
