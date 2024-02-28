// console.log("Come back is always greater than setback");
// let name;
// console.log(name);

// let str = "Subin";
// console.log(str);

// let undf;
// console.log(undf);


// let person = {
//     name: "Subin",
//     age: 28
// }

// console.log(person)

// let numbers = [1, 2, 3, 4]
// console.log(numbers)

// let n = null
// console.log(n)

// var x = 10;

// function js(){
//     console.log(x)
// }

// js()
// // var x = 20;
// console.log(x)
// let x = 30

// var x = 10
// {
//   var  x = 20
// }

// console.log(x);

// var x = 10
// var y = '10'
// console.log(x == y);
// console.log(typeof(x))
// console.log(typeof(y))
// console.log( null === undefined)

// sum = 0
// i = 0
// while (i <= 10)
// {
//     sum += i
//     i++;
// }

// console.log(sum)

// let age = 28

// var status = age > 18 ? "adult" : "kid";
// console.log(status)

// age = 28

// if (age > 30){
//     console.log("Grown up");
// }

// else if(age <= 30 && age > 18) {

//     console.log("Youngster")

// }
// else {

//     console.log("Kid")
// }

// var day = 6;
// var dayname;

// switch(day) {
//     case 1:
//         dayname = "Monday";
//         break;
//     case 2:
//         dayname = "Tuesday";
//         break;
//     case 3:
//         dayname = "Wednesday";
//         break;
//     case 4:
//         dayname = "Thursday";
//         break;
//     case 5:
//         dayname = "Friday";
//         break;
//     case 6:
//         dayname = "Saturday";
//         break;
//     case 7:
//         dayname = "Sunday";
//         break;
//     default:
//         dayname = "Invalid day"
    
// }

// console.log("Today is " + dayname);


// for(i=0; i<2; i++){
//     console.log("Hello..i can do it!..");
// }

// var i = 0

// while (i < 10){
//     console.log(i);
//     i++
// }

// var i = 1

// do {
//     console.log(i);
//     i++;
// }
// while( i <= 10)
// x()

// function x(){
//     console.log("Hello..how are you?");
// }

// var x = function y(name){

//     console.log("It's me.." +name);
// }

// x("Subin")
// Hello = 2
// var x = () => {
//     console.log(Hello);
// }

// x()

// function x(){
//     var a = 10;
//     console.log(a);
// }

// console.log(a)
// x()

// function x(callback){
// console.log("Hello");
// callback();

// }

// function y() {
//     console.log("Subin")
// }

// x(z);

// function z() {
//     console.log("Amal")
// }



// function sum(callback, x, y){
//     let result = x + y;
//     callback(result)
// }

// function display(result){
//     displayed = result * 2
//     console.log(displayed);
// }

// sum(display, 5, 6)

// function* generator(array){
// for(let i = 0; i < array.length; i++)
// {
//     yield array[i]
// }
// }

// const generatorObj = generator([1, 2, 3, 4, 5])
// console.log(generatorObj.next());
// console.log(generatorObj.next());
// console.log(generatorObj.next());
// console.log(generatorObj.throw(new Error("error")));
// console.log(generatorObj.return(10));
// console.log(generatorObj.next());


// const generatorObj1 = generator([1, 2, 3, 4, 5])
// console.log(generatorObj1.next())

// (function (){
//     console.log("Hello!..How are you?");
// })()
// let numbers = [1, 2, 3, 4, 45]
// numbers.push(4)
// console.log(numbers);
// last = numbers.length - 1
// console.log(numbers[last])
// new_numbers = numbers.pop()
// console.log(new_numbers)
// console.log(numbers)


// let numbers = [1, 2, 3, 4, 5, 6]
// numbers.unshift(0)
// console.log(numbers);
// first_number = numbers.shift()
// console.log(first_number)
// console.log(numbers)

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]

// new_arr = arr1.concat(arr2)
// console.log(new_arr);

// let sliced_array = arr1.slice(1,2)
// console.log(sliced_array)
// arr1.splice(2, 0, 6)
// console.log(arr1)
// arr1.splice(3,2)
// console.log(arr1)

// let numbers = [2, 2, 4, 8, 9]
// console.log(numbers.indexOf(9));

// let numbers = [1, 2, 3, 4, 5, 6]

// setTimeout( function (){
//     numbers.forEach( function(x){

//         console.log(x * 2);
//     })
// }, 2000)

// let sum = (a, b) => {
//     return a + b
// }

// console.log(sum(1,2));

// let sum = (x) => x * x
// console.log(sum(5));

// let numbers = [1, 2, 3, 4]

// let double = numbers.map( (x) =>{
//     return x * 2;
// });

// console.log(double);
// console.log(numbers)

// let numbers = [1, 2, 3, 4, 5, 6]

// let odd = numbers.filter((x) =>{
//     return x % 2 != 0;
// })

// console.log(odd);

// let numbers = [1, 2, 3, 4, 5]

// let sum = numbers.reduce((acc, cv) => {
//     return acc + cv;

// })

// console.log(sum);

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]

// console.log(matrix[0][0]);

// let person = {
//     name:"Subin",
//     age:28,
//     location:"Calicut"
// }

// console.log(person.name);
// console.log(person.age);
// console.log(person.location);


// let obj = {
//     name:"Subin",
//     age:28,
//     greet: function (){
//         console.log("Hello Subin");
//     }

// };

// console.log(obj.name) //object property
// obj.greet() // object method

// function Animal(name){  //parent class
//     this.name = name;
// }


// Animal.prototype.sayName = function() {
//     console.log("My name is " + this.name);
// };

// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function() {
//     console.log("Woof!");
// }

// let myDog = new Dog("Simba", "German Shepherd"); // every function in js can act as a constructor using the new keyword
// myDog.sayName();
// myDog.bark();

// function Person(name){
//     this.name = name;
// }

// Person.prototype.sayName = function() {
//     console.log("My name is " + this.name);
// }

// function Male(name, age) {
//     Person.call(this, name);
//     this.age = age;
// }

// Male.prototype = Object.create(Person.prototype);
// Male.prototype.constructor = Male;

// Male.prototype.hello = function() {
//     console.log("My name is " + this.name ," and I'm " + this.age + "years old")
// }

// let detail = new Male("Subin", 28);
// detail.sayName();
// detail.hello();

// let name = "Subin"
// let age = "Twenty eight"
// let greeting = `Hello, ${name} you are ${age} years old`
// console.log(greeting);

// let numbers = [1, 2, 3, 4, 5]
// let [a, b, c, d] = numbers
// console.log(a);

// let person = {
//     name : "Subin",
//     age : 28,
//     location : "Nilambur"
// }

// let {name , age} = person
// console.log(name, age)

// function greeting(name='Guest') // default parameter
// {
//     console.log(`Hello, ${name}`);
// }

// greeting('Subin')
// greeting()

// function sum(a,b,c,...rest){
//     console.log(rest);
// }
// //list of item converted to array
// sum(1,2,3,4,5,8,0,9)

// let spread = [0,1, 2, 3, 4, 5]
// // converted an array into list
// console.log(Math.min(...spread))

// export const name = "Subin"
// export function sayHello() {
//     console.log("Hello!");
// }

// try {
//     const dividend = window.prompt("Enter a dividend")
//     const divisor = window.prompt("Enter a divisor")

//     if(divisor = 0){
//         throw new Error("You can't divide by zero")
//     }

//     const result = dividend / divisor
//     console.log(result)
// }

// catch(error){
//     console.error(error)
   
    
// }

// finally {
//     console.log("This code executes anyway..")
// }

// console.log("This is the example try catch finally error handling..")



// function x(num, operation){

//     return operation(num)
// }

// function y(x){
//     return x * 2;
// }

// console.log(x(3, y));