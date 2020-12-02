// What is JavaScript?
//
// JavaScript is a programming language that serves to provide
// functionlity to our web pages.
// Chances are if you've looked at a page that did more then display static
// information, JavaScript was used to do it.
//
// JavaScript is a high-level, just-in-time compiled, multi-paradigm language
// that features dynamic typing, prototype-based object orientation and first
// class funcations. 

// Variables
// var is a Varible that is global or funcation scoped.
var bob;
// Let is a variable declared with block scope
let george;
// Const is a block scoped value that once assigned cannot change. 
const fred="Freddie Mercury is the GOAT";

let arty;

// Datatypes - Primitive
// String
bob = "Robert";
// Number
george = 1;
bob = 2.1;
bob = 2.3e4 // 2.300
bob = 0o45; // 37
bob = 0xf; // 15
bob = NaN; 
// Boolean
bob = true;
// undefined
let dan;
// null
// bob = null;
// Symbol
// bob = Symdol();

// Datatypes - Complex
// Array
bob[1,2,3,4,5,6];
console.log(bob[0]);
// empty array
bob = [];
bob[0] = 'Ringo Starr';
// Object
bob = {
    name: 'Robert Bobson',
    genre: 'Jazz'
}

// Control Flow statements
// If
if(bob !=dan){

} else if(dan != undefined){

}
// Traditional for loop
for(let i = 0; i< 100; i++){

}
// for-of loop, iterates over elements in an array. 
// for(let element of ary){}


// for-in loop, iterates over properties in an object.
for(let property in bob){

}

// Switch
switch(arty[0]){
    case 4:
        console.log('four');
        break;
    case 2:
        console.log('two');
        break;
    default:
        console.log('Default');
}

// Truthy/Falsey
// When dealing with our data types we have the concept of truthy and falsy, 
// which is the boolean value of the data when used in an expression. 
// All values are truthy, unless one of the below.
// False, 0, ''(empty string), null, undefined, NaN;

// AJAX
// Asynchronous JavaScript and XML
// Declare a XMLHttpRequest
// Define what actions we want execute with the result
// Open our request, and define values such as the type of request, or the request destination
// we send it. 

// Funcations
// These are just like methods inside of apex in their basic use. Though you can also pass a funcation as a parameter in javascript.
function bobsFun() {

    let XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function() {
        console.log(XHR.readyState);
        console.log(XHR.status);
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.response);
            let Luke = JSON.parse(This.response);
            console.log(luke);
            for(let prop in luke){
                   console.log(luke[prop]);
            }
        }
    }  
    XHR.open("GET", "https://swapi.dev/api/people/1/", true);
    XHR.send();    
}

