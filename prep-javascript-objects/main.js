var person = { firstName: 'Daniel', lastName: 'Catan', hobby: 'dancing' };
console.log(person);

var fullName = "The person's name is:" + ' ' + person.firstName + ' ' + person.lastName + '.';

console.log(fullName);

person.job = 'Chef';
person.previousJob = 'Rapper';

var jobNow = "The person's current job is:" + ' ' + person.job + '.';
var jobBefore = "The person's previous job is:" + ' ' + person.previousJob + '.';

console.log(jobNow);
console.log(jobBefore);

console.log(person);
