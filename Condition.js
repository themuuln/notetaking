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

// let a = 12, b = 23, c = -16, d= 0;
// let sum = 0, count = 0, multi = 1;

// if (a > 0) {
//     sum += a;
// } else if (a === 0) {
//     count++;
// } else {
//     multi *= a;
// }

// if (b > 0) {
//     sum += b;
// } else if (b === 0) {
//     count++;
// } else {
//     multi *= b;
// }

// if (c > 0) {
//     sum += c;
// } else if (c === 0) {
//     count++;
// } else {
//     multi *= c;
// }

// if (d > 0) {
//     sum += d;
// } else if (d === 0) {
//     count++;
// } else {
//     multi *= d;
// }


// console.log('sum = ' + sum);
// console.log('count = ' + count);
// console.log('multi = ' + multi);

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

// ? Uneheer hicheesen ch oilgosongue uuchlaarai

// ------------------------------------------------------------------------------------------------------------

// N нас өгөгдвөл тухайн хүнийг аль ангилалд хамрах гэдгийг олно уу.

// let n;

// n = 12

// if(6 >= n && n > 0) {
//     console.log('Baga nasnii huuhed')
// } else if (12 >= n && n >= 7) {
//     console.log('Huuhed')
// } else if (18 >= n && n >= 13) {
//     console.log('Uswur nasnii huuhed')
// } else if (n >= 18) {
//     console.log('Zugeer hun')
// } 

// ------------------------------------------------------------------------------------------------------------

// “Nest Academy” гэж 1 удаа хэвлэ.

// console.log('Nest Academy')

// ------------------------------------------------------------------------------------------------------------

// “Nest Academy” гэж 3 удаа хэвлэ.

// console.log('Nest Academy');
// console.log('Nest Academy');
// console.log('Nest Academy');

// ------------------------------------------------------------------------------------------------------------

//“Nest Academy” гэж n удаа хэвлэ.

// let a = 1, n; 

// n = 5

// while(a <= n || a == n){ 
//     a += 1
//     console.log('Nest Academy');
// }

// ------------------------------------------------------------------------------------------------------------

// ATM машины code ийг бичицгээе. Тоон дүн оруулахад “20000”, “10000”, “5000”, “1000”, “500” ийн дэвсгэртүүдийг ашиглан 
// тоон дүнд харгалзах мөнгийг буцаа.

// let dun, b, c, d, e, f;

// dun = 58500
// b = 0
// c = 0
// d = 0 
// e = 0
// f = 0

// while(dun > 0) {
//     if (dun >= 20000) {
//         b += 1
//         dun = dun - 20000
//     } else if (dun >= 10000) {
//         c += 1
//         dun = dun - 10000
//     } else if (dun >= 5000) {
//         d += 1
//         dun = dun - 5000
//     } else if (dun >= 1000) {
//         e += 1
//         dun = dun - 1000
//     } else if (dun >= 500) {
//         f += 1
//         dun = dun - 500
//     }
// }

// b = b + ' shirheg 20000'
// c = c + ' shirheg 10000'
// d = d + ' shirheg 5000'
// e = e + ' shirheg 1000'
// f = f + ' shirheg 500'

// console.log(b, ',', c, '', d, '', e, '', f,);
