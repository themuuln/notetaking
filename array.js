// Array

// Uurtuu iluu olon utga aguulah chadwartai huwisagch

// let people = Array('Tom', 'Tony', 'Bill', 'Lucy', 'Hannah', 'Zoe');

// for(let i = 0; people.length > i; i++) {
//     console.log(people[i]);
// }

/* Prints
Tom
Tony
Bill
Lucy
Hannah
Zoe
*/

// let people = Array('Tom Smith, 15', 'Tony Graham, 9', 'Bill Hoffman, 13', 'Lucy Harding, 17', 'Hannah Briks, 12', 'Zoe Blackbrun, 14');

// for(let i = 0; people.length > i; i++) {
//     console.log(people[i]);
// }

/*
Prints Name, surname, age
*/

// [] dotorhi too n elementiig songono 

// let people = Array('Tom', 'Tony', 'Bill', 'Lucy', 'Hannah', 'Zoe');
                    //  0      1       2       3        4       5

// for(let i = 0; people.length > i; i++) {
//     console.log(people[3]);
// }   

/* Prints
Lucy
Lucy
Lucy
Lucy
*/

// let people = Array('Tom', 'Tony', 'Bill', 'Lucy', 'Hannah', 'Zoe');
// let age = Array(15, 9, 13, 17, 12, 14)
// for(let i = 0; people.length > i; i++) {
//     console.log(people[i], age[i]);
//     // console.log(age[i]);
//     }

// Prints Tom 15, Tony 9, Bill 13 ...

// * Daalgawar 1 
// If N numbers are given, print the numbers in reverse order.

// let n = Array(1, 3, 6, 4, 9);
// for(let i = n.length - 1; i >= 0; i--) {
//     console.log(n[i])
// }

// * Daalgawar 2
// If N numbers are given, print the numbers in the odd position first, then the numebrs in the even position.

// let n = Array(1, 3, 6, 4, 9); // 3, 4, 1, 6, 9
// for(s = 0; s < n.length; s ++) {
//     if(s % 2 === 1) { 
//         console.log(n[s]) //sondgoi too hewlene
//     }
// }
// for (let i = 0; i < n.length; i++) {
//     if(i % 2 === 0) {
//         console.log(n[i]) // tegsh too hewlene
//     }
// }

// * Daalgawar 3 
// If N numbers are given, move the last number to position 1 and save all other numbers by 1 position.

// let n = [1, 2, 3, 4, 5, 34]

// console.log(n[n.length -1]);

// for(let l = 0; l < n.length -1; l++) {
//     console.log(n[l])
// }

// * Daalgawar 4

// ruby -e 'C=`stty size`.scan(/\d+/)[1].to_i;S=["2743".to_i(16)].pack("U*");a={};puts "\033[2J";loop{a[rand(C)]=0;a.each{|x,o|;a[x]+=1;print "\033[#{o};#{x}H \033[#{a[x]};#{x}H#{S} \033[0;0H"};$stdout.flush;sleep 0.1}'

// * Daalgawar 5

// let a = 3, n = 2;
// console.log(Math.pow(a, n))

// * Daalgawar 6

//