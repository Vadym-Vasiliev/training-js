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

// const stars = 7;
// let price;

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
// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log("not this numbers");
// }

// console.log(price);

// const stars = 6;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 50;
// } else if (stars === 5) {
//   price = 100;
// } else {
//   console.log("NEMAETAKOGO");
// }

// console.log(price);

// switch------------

// const stars = 3;
// let price;

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 50;
//     break;

//   case 5:
//     price = 100;
//     break;

//   default:
//     console.log("NETYTAKOGOBLAT");
// }

// console.log(price);

// ----------------------

// Напиши скріпт вибора опції достаки товара
// Опція зберігається в змінній option: 1-самовивіз, 2- курєр, 3- пошта
// в Змінну message записати смс в залежності від опції
// - 'Ви зможете забрати товар завтра'
// - 'Курєр доставить заказ завтра  з 9 до 18'
// - 'Посилка буде сьогодні'
// - 'Вам зателефонує менеджер'

// const option = 4;
// let message = "";

// switch (option) {
//   case 1:
//     message = "Ви зможете забрати товар завтра";
//     break;
//   case 2:
//     message = "Курєр доставить заказ завтра  з 9 до 18";
//     break;
//   case 3:
//     message = "Посилка буде сьогодні";
//     break;

//   default:
//     console.log("Вам зателефонує менеджер");
// }

// console.log(message);

// SWITCH тільки тоді  коли ===
// IF ELSE  > <

// ЦИКЛ ---------------------

// for (ініціалізація; условія; пост - вираженія)

// for (let i = 5; i < 10; i += 1) {
//   console.log(i);
// }
// console.log("FINISH");

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   if (message.includes("sale") || message.includes("spam")) {
//     return true;
//   }
//   // Change code above this line
//   return false;
// }

// function calculateEngravingPrice(message, pricePerWord) {
//   let messageArray = message.split(" ");
//   console.log(messageArray);

//   return messageArray.length * pricePerWord;
//   console.log(messageArray);
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// ---------------------------
// перебрати масив
// зробити змінну total до цикла
// кожному елементу додати до total

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);

//   total += cart[i];
// }

// console.log(total);

// приклад з for of

// for (const value of cart) {
//   total += value;
// }

// console.log(total);

// ------------------------------

// написати скріпт який підраховую суму всіх парних чисел в масиві

// зміна total
// перебрати масив
// провірити елементи на парність
// якщо парні + до total

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// let total = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);

//   if (numbers[i] % 2 === 0) {
//     console.log("PARNE");

//     total += numbers[i];
//   }
// }

// console.log(total);

// ---------------------------
//  скрипт пошуку логіна
// якщо логіна немає. смс логін не знайдний
// якщо є . логін знайдений

// const logins = ["qweqwe", "qweqweqwe", "qwe", "qweqweqweqwe"];
// const loginToFind = "qwe";
// let message = "";

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   if (login === loginToFind) {
//     message = `USER ${loginToFind} ZNAIDENUI.`;
//     break;
//   }
//   message = `USER ${loginToFind} NE ZNAIDENUI.`;
// }
// console.log(message);

// =========================
// Напиши скріпт пошуку самого меншого числа в масиві
// число унікальне (не повторюється)

// const numbers = [51, 18, 13, 24, 7, 85, 19, 1];

// let smallsNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallsNumber) {
//     smallsNumber = number;
//   }
// }

// console.log(smallsNumber);

// =============================
// Напиши скріпт пошуку самого більшого числа в масиві
// число унікальне (не повторюється)

// const numbers = [51, 18, 13, 24, 7, 85, 19, 1, 133];
// let bigsNumber = numbers[0];

// for (const number of numbers) {
//   if (number > bigsNumber) {
//     bigsNumber = number;
//   }
// }
// console.log(bigsNumber);

// ==================================
// взяти масив і вшити його в одну строку, через кому
// спочатку через for
// потім через join

//  FOR

// const friends = ["Kiwi", "Mango", "Apple", "Srawberry"];
// let string = "";

// for (const friend of friends) { // додає коми
//   string += friend + ",";
// }

// string = string.slice(0, string.length - 1); // обрізає останню кому

// console.log(string);

// JOIN

// const friends = ["Kiwi", "Mango", "Apple", "Srawberry"];
// const string = friends.join(",");

// console.log(string);

//==============================
// напиши скріпт який заміняє регістр кожного символа в строці на протилежний
// наприклад: строка 'JavaScript' на виході 'jAVAsCRIPT'

// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";
// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

//   if (letter === letter.toLowerCase()) {
//     console.log("В нижньому регістрі!!! - ", letter);

//     invertedString += letter.toUpperCase();
//   } else {
//     console.log("В верхньому регістрі!!! - ", letter);

//     invertedString += letter.toLowerCase();
//   }
// }

// console.log(invertedString);

// КОРОТША ВЕРСІЯ

// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";
// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }

// console.log(invertedString);

// ==============================
// Робимо slug в URL з назви статті
// Заголовок тільки з букв і пробілів

// нормалізуємо строку
// зшиваємо в строку с (разделитилями)

// const title = "Top 10 benefits of React framework";

// console.log(title);

// const normalizedTitle = title.toLocaleLowerCase();

// console.log(normalizedTitle);

// const words = normalizedTitle.split(" ");

// console.log(words);

// const slug = words.join("-");

// console.log(slug);

// КОРОТША ВЕРСІЯ

// const slug = title.toLocaleLowerCase().split(" ").join("-");

// console.log(slug);

// ============================================
// напиши скріпт який рахує суму елементів двох масивів

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);
// console.log(numbers);

// for (const number of numbers) {
//   total += number;
// }

// console.log(total);

// ========================================
// SPLICE()

// const cards = [
//   "Карточка-1",
//   "Карточка-2",
//   "Карточка-3",
//   "Карточка-4",
//   "Карточка-5",
// ];

// console.log(cards);

// ВИДАЛЕННЯ елементів по індексу

// const cardToRemowe = "Карточка-5";
// const index = cards.indexOf(cardToRemowe);

// console.log(index);

// cards.splice(index, 1); //видаляє карточку

// console.log(cards);

// ДОДАЄ елементи по індексу

// const cardToInsert = "Карточка-6";
// const index = 6;

// cards.splice(index, 0, cardToInsert);

// console.log(cards);

//ОБНОВЛЯЄ(ЗАМІНЯЄ)

// const cardToUpdate = "Карточка-4";
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, "ОБНОВЛЕНА КАРТКА-4");

// console.log(cards);
