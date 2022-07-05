// Conditions, Problem solving
// Nuhtsluus hamaarch uildel hiij surna

// let hour;

// hour = 15;

// if (hour > 12){
//     console.log('Good evening!');
// } else {
//     console.log('Good morning!');
// } else

/* 
if iin door bairlana

else if - else if(condition) {}

else
*/


// ------------------------------------------------------------------------------------------------------------



// 1. A bolon B too ugugdsun bol ih toog ol, jishih uildel ashiglahguigeer

// let x, y, z;

// x = 30;
// y = 20;

// z = (Math.abs(x + y) + Math.abs(x - y)) / 2;

// console.log(z);


// ------------------------------------------------------------------------------------------------------------


// 2. A bolon B too ugugdsun bol ihiig ni ol. A bolon B too ugugdsun bol jishih uildel hiij ihiig ni ol

// let x, y;

// x = 12
// y = 23 

// if (x > y) {
//     console.log("X too Y toonoos ih");
// } else {
//     console.log("Y too ni X toonoos ih");
// }


// ------------------------------------------------------------------------------------------------------------


// 3. 4 toonii iheesee 2 dahi toog ol

// let a, b, c, d;

// a = 100
// b = 90
// c = 80
// d = 40

//console.log(d > c && b > a && c > b);
//          a > b > c > d
// jishih temdeg zuwhun 2 taliinhaa toog l jishdeg ba tuunees tsaashih toog jishdeggui uchir && ashiglana

// if (
// /* a > b > c > d */ a > b && b > c && c > d ||
// /* a > b > d > c */ a > b && b > d && d > c || 
// /* c > b > a > d */ c > b && b > a && a > d || 
// /* c > b > d > a */ c > b && b > d && d > a || 
// /* d > b > a > c */ d > b && b > a && a > c ||
// /* d > b > c > a */ d > b && b > c && c > a) {
//     console.log(b)
// } else if (
//     /* b > a > c > d */ b > a && a > c && c > d ||
//     /* b > a > d > c */ b > a && a > d && d > c ||
//     /* c > a > b > d */ c > a && a > b && b > d ||
//     /* c > a > d > b */ c > a && a > d && d > b ||
//     /* d > a > c > b */ d > a && a > c && c > b ||
//     /* d > a > b > c */ d > a && a > b && b > c ) {
//     console.log(a)
// } else if(
//     /* b > c > a > d */ b > c && c > a && a > d ||
//     /* b > c > d > a */ b > c && c > d && d > a ||
//     /* a > c > b > d */ a > c && c > b && b > d ||
//     /* a > c > d > b */ a > c && c > d && d > b ||
//     /* d > c > a > b */ d > c && c > a && a > b ||
//     /* d > c > b > a */ d > c && c > b && b > a 
// ) {
//     console.log(c)
// } else {
//     console.log(d)
// }

// ------------------------------------------------------------------------------------------------------------

// 4. 4 toonii 0-ees ih toonuudiin niilber 0-teo tentsuu toonuudiig toolj, 0-ees baga toonuudiin urjweriig ol.

// let a, b, c, d;
// a = -1
// b = 0
// c = 1 
// d = 2
// if (a >= 0){
//     elseif (b >= 0){

//     }
// }

// ------------------------------------------------------------------------------------------------------------


// 5. Toog tegsh sondgoi esehiig todorhoiloh

// let x;

// x = 11

// if (x % 2 == 0){
//     console.log('Tegsh too')
// } else {
//     console.log('Sondgoi too')
// }

// ------------------------------------------------------------------------------------------------------------

// 2.1 Өгөгдсөн А он нь өндөр жил мөн үү.  Өндөр жил гэдэг нь 4-т хуваагддаг, 100   хуваагддаггүй, 400 жилд хуваагддаг жилийг хэлдэг.

// let a;

// a = 2009
// if (a % 4 == 0 && a % 100 != 0){
//     console.log('Undur jil')
// } else {
//     console.log('Undur jil bish')
// }

// ------------------------------------------------------------------------------------------------------------

// 1-100 хүртэлх тоонуудын нийлбэрийг ол.

// let a, sum = 0;

// a = 1
// while (a <= 100){
//     sum+=a;
//     a++
// }
// console.log(sum)

// ------------------------------------------------------------------------------------------------------------

// Шатрын хөлгийн 2 буудал координатын цэгүүд өгөгдсөн бол ижил өнгөтэй эсэхийг нь ол. Хэрвээ тийм бол `Yes`, үгүй бол `No` гэж хэвлэнэ.

// ?

// ------------------------------------------------------------------------------------------------------------

// N нас өгөгдвөл тухайн хүнийг аль ангилалд хамрах гэдгийг олно уу.

let n;

n = 12

if(6 >= n && n > 0) {
    console.log('Baga nasnii huuhed')
} else if (12 >= n && n >= 7) {
    console.log('Huuhed')
} else if (18 >= n && n >= 13) {
    console.log('Uswur nasnii huuhed')
} else if (n >= 18) {
    console.log('Zugeer hun')
} 







