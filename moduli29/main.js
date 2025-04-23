var programingLang = ['JavaScript', 'PHP', 'C#'];

console.log(programingLang[0]);

console.log(programingLang);

programingLang.push('Java');
console.log(programingLang);

programingLang.pop();
console.log(programingLang);

programingLang.unshift('C#');
console.log(programingLang);

programingLang.shift;
console.log(programingLang);

programingLang.splice(0, 2, 'Python');
console.log(programingLang);

console.log(Math.random()*5);
console.log(Math.floor(Math.random()*9));

var students = ('elsa', 'haner', 'gerona', 'florian' );
var (s1,s2,s3,s4) = students;

console.log(s4);
console.log(s2);

var numbers = [1,2,3,4,5,6,7,8,9,10]

var [first, second, ...otherNumbers] = numbers;

console.log(first);
console.log(second);
console.log(otherNumbers);

