let obj = {};
let obj2 = new Object();

function Usuario() {
    this.name = 'Pedro Pascal';
}
let user = new Usuario();
console.log(user.constructor);

const str1 = '1 + 1';
const str2 = new String('1 + 1');
console.log(eval(str1));
console.log(eval(str2));