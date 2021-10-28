
//Array declaration and adding them

// var num = [10, 20, 30, 40];
// var sum = 0;

// for(var i = 0; i < 4; i++) {
//     console.log(num[i]);
//     sum = sum + num[i];

// }
// console.log(sum);


//Array declaration without index value
var num = new Array();

for (var i = 0; i < 2; i++) {
    num[i] = parseInt(prompt("Enter a Number : "));
}
var sum = 0;

for(var i = 0; i < 2; i++) {
    console.log(num[i]);
    sum = sum + num[i];


}
console.log("sum = " + sum);
