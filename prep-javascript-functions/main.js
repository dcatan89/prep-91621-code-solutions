function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var conversion = convertHoursToMinutes(3);

console.log(conversion);

function getGreeting(name) {
  return 'High ' + name;
}
var theGreeting = getGreeting('five');

console.log(theGreeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(3, 5);

console.log(addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Results = multiplyAndDivideBy5(1, 5);
console.log(multiplyAndDivideBy5Results);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResults = subtractTwoNumbers(10, 5);
console.log(subtractTwoNumbersResults);

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}
var getCircleCircumferenceResults = getCircleCircumference(2);
console.log(getCircleCircumferenceResults);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var myFullName = getFullName('Daniel', 'Catan');
console.log(myFullName);

function cube(number) {
  return number * number * number;
}
var cubeResults = cube(3);
console.log(cubeResults);
