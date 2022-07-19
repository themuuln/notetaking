// Characters & String

// Create string `` , '' , "" ;

// let name = 'My name is Ted'

// console.log(name.replace('Ted', 'Tod')) // My name is Tod

// * Daalgawar 1. 1
// Use the length property to alert the length of txt.

// let txt = "Hello World!";
// let x = txt.length;
// alert(x);

// * Daalgawar 1. 2
// Use escape characters to alert We are "Vikings".

// let txt = "We are \"Vikings\"";
// alert(txt);

// * Daalgawar 1. 3
// Concatenate the two strings to alert "Hello World!".

// let str1 = "Hello ";
// let str2 = "World!";
// alert(str1 + str2);

// * Daalgawar 2.1
// Convert the text into an UPPERCASE text:

// let txt = "Hello World!";
// txt = txt.toUppercase();

// * Daalgawar 2.2
// Use the slice method to return the word "bananas".

// let txt = "I can eat bananas all day";
// let x = txt.slice(10, 17);

// * Daalgawar 2.3
// Use the correct String method to replace the word "Hello" with the word "Welcome".

// let txt = "Hello World";
// txt = txt.replace("Hello", "Welcome");

// * Daalgawar 2.4

// let txt = "Hello World";
// txt = txt.toUpperCase();

// * Daalgawar 2.5

// let txt = "Hello World";
// txt = txt.toLowerCase();

// * -----------------------------------------------------------------------------------

// * Daalgawar 3. 1
// Write a JavaScript code to capitalize the first letter of a string. 

// let txt = 'javascript'
// txt = txt.charAt(0).toUpperCase() + txt.slice(1); //txt.charAt(5).toUpperCase() + txt.slice() 
// console.log(txt) // Javascript

// * Daalgawar 3. 2
// Write a JavaScript code to capitalize the first letter of each word in a string.

// let part = name1.slice(1);
// let part2 = name1.slice(9 , 16);
// let part3 = part.toLowerCase();
// let part4 = part1.toLowerCase();
// let part5 = part2.toLowerCase();
// let single = 'part3' + 'part4' + 'part5';
// console.log(single);

// * Daalgawar 3. 3
// Write a JavaScript code that takes a string which has lower and upper case letters as a 
// parameter and converts upper case letters to lower case, and lowercase letters to uppercase.

// let txt = 'JavaScript'
// let a = ''
// for (let i = 0; i < txt.length; i++) {
//     let sth = ''
//     if (txt[i].charCodeAt() >= 97 && txt[i].charCodeAt() <= 122) {
//         sth =  txt[i].toUpperCase()
//     } else {
//         sth = txt[i].toLowerCase()
//     }
//     a += sth
// }
// console.log(a); // jAVA sCRIPT

// * Daalgawar 3. 4
//  Write a JavaScript code to concatenates a given string n times (default is 1)

// let txt = `Hi!`
// let n = 6
// let a = 0
// let b = '';

// while(a < n) {
//     b = b + txt
//     a++
// } 
// console.log(b) // Hi! Hi! Hi! Hi! Hi! Hi! 

// * Daalgawar 4.
// Remove specific characters from a string
// What’s the most efficient way to strip specific characters from a string? Without using replace().

// let str = "aanmaa amamana maanmg mna";
// let arr = ["a", "m"];
// let sum =''
// for (let i = 0; i < str.length; i++) {
//     let isSame = false;
//     for (let j = 0; j < arr.length; j++) {
//     if (arr[j] === str[i]) isSame = true;
//     }
//     if(!isSame){
//     sum+= str[i]
//     }
// }

// console.log(sum);