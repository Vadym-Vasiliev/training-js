// виправляє слово SamSUnG на Samsung через нормалізацію ----------------------

//let brand = "SamSUnG";
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// оператори рівняння -------------------------

// console.log(15 > 10);
// console.log(15 > 20);

// console.log("10" > 5);

// const isEqual = 5 == 5;
// const isEqual2 = 1 === true;
// console.log(isEqual);
// console.log(isEqual2);

// Приведение к булю на примере Boolean(value) -------------------
// 0,NaN,null,undefined,false,'' все приводиться до false

// console.log(Boolean(null));

// Логічна І (оператор &&)-------------------

// console.log(5 && "hello" && 7 && 0);

// Логічна ІЛІ(оператор ||)-------------------

// console.log(false || 0 || 8 || 10);

// Логічна НІ(оператор !)---------------------

// console.log(!true);

// ЗАДАЧИ -----------------------------------------------

// const x1 = 10;
// const x2 = 30;
// const number = 15;
// console.log(` Число ${number} попадає в відрізок до ${x1}?`, number < x1);

// const x1 = 10;
// const x2 = 30;
// const number = 15;
// console.log(` Число ${number} попадає в відрізок після ${x1}?`, number > x2);

// const x1 = 10;
// const x2 = 30;
// const number = 15;
// console.log(
//   ` Число ${number} попадає в відрізок від ${x1} до ${x2} ?`,
//   number > x1 && number < x2
// );

// const x1 = 10;
// const x2 = 30;
// const number = 15;
// console.log(
//   ` Число ${number} попадає в відрізок до ${x1} ілі ${x2} ?`,
//   number < x1 || number > x2
// );

//--------Вебинар-2-------------

//напиши скріпт вибора вартості готелю по кількості  зірок
//1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$

const stars = 7;
let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// }

//коротша версія верхнього прикладу
switch (stars) {
  case 1:
    price = 20;
    break;

  case 2:
    price = 30;
    break;

  case 3:
    price = 50;
    break;

  case 4:
    price = 70;
    break;

  case 5:
    price = 120;
    break;

  default:
    console.log("not this numbers");
}

console.log(price);
