// Створіть змінну str і дайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка,
// //виведіть на екран символ 'a', символ 'b', символ 'e'.

// const str = "abcde";

// alert(str[0]);
// alert(str[1]);
// alert(str[4]);

//Задача 2. Напишите скрипт, который считает количество секунд в часе.

// const hours = Number(prompt("Enter hours"));

// if (hours === 0) {
//   alert("No information.");
// } else {
//   const seconds = hours * 3600;
// }

// const seconds = hours * 3600;
// alert(seconds);

// Переробите наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --.
//Кількість рядків коду не повинна змінитися. Код для переробки:
// let num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;

// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num += 1;
// num -= 1;

// alert("result:" + num);

// Напишіть інструкцию, яка приймає рядок як аргумент і перетворює регістр першого
// символу рядка з нижнього регістру у верхній.

// const str = "string not starting with capital";
// const newStr = str[0].toUpperCase() + str.slice(1);

// console.log(newStr);

//// Завдання 5. Ви просите користувача ввести суму його зарплати. Потім розраховуєте:

// Добавку у вигляді премії у сумі 15% від зарплати.
// Податки у сумі 10% від суми всіх нарахувань (зарплата + премія).
// Витрату в магазині в сумі 190.
// Розділяєте суму, що залишилася, між користувачем і його "дружиною"/"чоловіком".

// Виводьте скільки залишилося в результаті всіх операцій грошей у користувача.

// let salary = Number(prompt("What your salary?"));
// salary *= 1.15;
// salary = Math.floor(salary);

// alert(`premia: ${salary}`);

// salary -= salary * 0.1;
// salary = Math.floor(salary);

// alert(`clear: ${salary}`);

// salary -= 190;
// salary = Math.floor(salary);

// alert(`after shop: ${salary}`);

// salary /= 2;
// salary = Math.floor(salary);

// alert(`the end: ${salary}`);

//// Завдання 6. Потрібно попросити користувача задумати число. Потім він повинен помножити це число на 2 і додати отриманого результату 7.
// Те, що сталося в результаті, потрібно ввести в діалоговому вікні prompt().
// Ви повинні видати користувачеві, скільки він задумав.

// const message =
//   "Загадайте число і помножити його на 2 і додати до результату число 7.";

// let result = Number(prompt(message));

// result = (result - 7) / 2;
// const answer = confirm(` Ви загадали число ${result}?`);

// if (answer) {
//   alert("Ми вгадали ваше число!");
// } else {
//   alert("Ви збрехали, ми вгадали!");
// }

//// Завдання 7. Попросіть користувача ввести 3 імені та прізвища, наприклад, студентів.
// Виведіть введені дані методом console.log
// у вигляді абзаців та нумерованого списку.

// const name1 = prompt("Напишіть імя та прізвища.");
// const name2 = prompt("Напишіть імя та прізвища.");
// const name3 = prompt("Напишіть імя та прізвища.");

// // перенос рядка

// console.log(`1: ${name1}\n2: ${name2}\n3: ${name3}`);

//За допомогою методу prompt() отримайте спочатку ім'я користувача,
// потім рік народження і збережіть у 2 змінні. Обчисліть вік користувача та виведіть
// його в абзаці за допомогою alert() у такому форматі "Антон: 24".

// const name = prompt("Напишіть своє імя.");
// let year = Number(prompt("Якого Ви року?"));

// const age = 2022;

// console.log(`${name}: ${age - year}`);

//====================
//// Завдання 1. За допомогою методу prompt() отримайте спочатку ім'я користувача,
// потім рік народження і збережіть у 2 змінні. Обчисліть вік користувача та виведіть
// його в абзаці за допомогою alert() у такому форматі "Антон: 24".
// Визначте залишок від розподілу кількості років на 10. Залежно від цього виведіть в абзаці
// "Антон: 21 рік" або "Антон: 24 роки" або "Антон: 25 років".
// Тобто. всім чисел з першого в кінці має бути "_1 рік", для чисел з 2,3,4
// наприкінці - "_3 роки", а всіх інших - "_7 років".
// Ви можете використовувати для цього умовні конструкції if...else або switch...case.

// const name = prompt("Напишіть своє імя");
// const year = Number(prompt("Напишіть свій рік народження?"));

// console.log(year);

// const nameOne = prompt("Напишіть своє імя");
// const yearOfBirth = Number(prompt("Напишіть свій рік народження?"));

// let today = new Date();
// let year = today.getFullYear() - yearOfBirth;
// console.log(year);

// const div = year % 10;
// let message;

// switch (div) {
//   case 1:
//     message = `${nameOne}: ${year} рік`;
//     break;
//   case 2:
//   case 3:
//   case 4:
//     message = `${nameOne}: ${year} роки`;
//     break;
//   default:
//     message = `${nameOne}: ${year} років`;
// }
// console.log(message);

// ============================
//// Завдання 2. Щасливим квитком називають такий квиток із шестизначним номером,
// де сума перших трьох цифр дорівнює сумі останніх трьох.
// Напишіть функцію checkTicket(number), яка перевіряє щасливість квитка.

// console.log(checkTicket("005212"));
// console.log(checkTicket("133700"));
// console.log(checkTicket("123032"));

// function checkTicket(number) {
//   const ticketLength = number.length / 2;
//   const ticket1 = number.slice(0, ticketLength);
//   const ticket2 = number.slice(ticketLength);

//   let totalTicket1 = 0;
//   let totalTicket2 = 0;

//   for (let i = 0; i < ticket1.length; i += 1) {
//     totalTicket1 += Number(ticket1[i]);
//     totalTicket2 += Number(ticket2[i]);
//   }

//   return totalTicket1 === totalTicket2;
// }

// // Завдання 3. За допомогою prompt() пропонуєте користувачеві ввести число від 1 до 10 включно та
// записуєте змінну. Другий змінної привласнюєте випадкове число в тому ж діапазоні за
// допомогою Math.random(), закругливши його до цілого значення.
// У випадку, якщо випадкове число та число, введене користувачем збіглися, виводьте в
// консоль "Ви щасливчик! Ваше число ...",
// якщо не збіглися - "Не вгадали! Ваше число ..., а випало число ..." (замість точок мають бути значення відповідних змінних.

// let child = Number(prompt("Введіть число від 1 до 10"));

// if (child > 10 || child < 1) {
//   alert("Не вірно введено число");
//   child = Number(prompt("Веддіть число від 1 до 10"));
// }
// const randomChild = Math.floor(Math.random() * 11);

// const message =
//   child === randomChild
//     ? `Ви Щасливчик! Ваше число ${child}`
//     : `Не вгадали, Ваше число ${child}, а випало число ${randomChild}`;

// console.log(message);

////Завдання 5. Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу
//for, while та do...while.

// let total = 0;

//спосіб for
// for (let i = 1; i <= 10; i += 1) {
//   total += i;
// }

// console.log(total);

//спосіб while
// let total = 0;
// let counter = 0;
// while (counter <= 10) {
//   counter += 1;
//   total += counter;
// }

// console.log(total);

// do while

// let total = 0;
// let counter = 0;

// do {
//   counter += 1;
//   total += counter;
// } while (counter <= 10);
// console.log(total);

//===============================

////Завдання 1. Напишіть функцію copyArr(arr), яка копіює масив, не змінюючи оригінал.

// var vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

// function arrayClone(arr) {
//   return arr.slice(); // один метод====

//   let newArr = []; // другий спосіб====
//   for (let i = 0; i < arr.length; i += 1) {
//     newArr.push(arr[i]);
//   }
//   return newArr;

//   let newArr = []; // третій спосіб====
//   newArr = [].concat(arr);

//   return newArr;
// }
// console.log(arrayClone(vegetables) === vegetables);
// console.log(arrayClone(vegetables));

//==================================
//// Завдання 2. Напишіть код, який перетворює та поєднує всі елементи масиву в одне рядкове
// значення. Елементи масиву будуть розділені комою. Отримайте результат двома різними
// методами.

// var vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

// let string = vegetables.join(","); //перший спосіб

// let string = "";
// for (let i = 0; i < vegetables.length; i += 1) {
//   string += vegetables[i] + (i === vegetables.length - 1 ? "." : ", ");
// }

// console.log(string);

//==========================
//// Завдання 3. Користувач вводить багатозначне число через promt. Напишіть функцію colonOdd(num),
// яка приймає число num як аргумент і вставляє двокрапку (:) між двома непарними числами.
// Наприклад, якщо вводиться число 55639217, то вихід має бути 5:563:921:7.

// function colonOdd(num) {
//   let strNum = num.toString();
//   let result = "";

//   for (let i = 0; i < strNum.length - 1; i += 1) {
//     result += strNum[i];
//     if (Number(strNum[i]) % 2 !== 0 && Number(strNum[i + 1]) % 2 !== 0) {
//       result += ":";
//     }
//   }
//   return result + strNum[strNum.length - 1];
// }

// console.log(colonOdd(14570999));

//==============================

//// Завдання 4. Напишіть функцію, яка приймає
// рядок як аргумент та замінює регістр кожного символу на протилежний.
// Наприклад, якщо вводиться «КаЖдЫй ОхОтНиК», то на виході повинен бути масив "кАжДыЙ оХоТнИк".

// function changeCase(arg) {
//   let newString = "";

//   for (let i = 0; i < arg.length; i += 1) {
//     const ell = arg[i];
//     if (ell === ell.toUpperCase()) {
//       newString += ell.toLowerCase();
//     } else {
//       newString += ell.toUpperCase();
//     }
//   }
//   return newString;
// }

// console.log(changeCase("кАжДыЙ оХоТнИк"));

//=============================

//// Завдання 5. Напишіть функцію removeDuplicates(arr), яка повертає масив, у якому видалено
// повторювані елементи з масиву arr (ігноруйте чутливість до регістру).

// var arr = [
//   "php",
//   "php",
//   "css",
//   "css",
//   "script",
//   "script",
//   "html",
//   "html",
//   "java",
// ];
// function removeDuplicates(arr) {
//   let newArray = [];

//   for (const elementArr of arr) {
//     if (!newArray.includes(elementArr)) {
//       newArray.push(elementArr);
//     }
//   }
//   return newArray;
// }

//второй варіант

// function removeDuplicates(arr) { //Сет не дублює елементи(він їх не приймає)
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr));

//==========================
//// Завдання 6. Напишіть код, який створює масив елементів, що становлять суму
// відповідних елементів заданих масивів.

// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [4, 5, 6];

// const newArr = [];
// const largerArr = arr1.length >= arr2.length ? arr1 : arr2;

// const smallerArr = arr1.length < arr2.length ? arr1 : arr2;

// console.log(largerArr);
// console.log(smallerArr);
// let i = 0;

// for (const elementArr of largerArr) {
//   if (smallerArr[i]) {
//     let sum = elementArr + smallerArr[i];
//     newArr.push(sum);
//   } else {
//     newArr.push(elementArr);
//   }

//   i += 1;
// }
// console.log(newArr);

//==============================
//// Даний масив із числами.
// Дізнайтеся скільки елементів з початку масиву треба скласти, щоб у сумі вийшло більше 10-ти.

// const number = [2, 3, 2, 5, 7, 1];

// console.log(number);

// let num = 0;

// for (let i = 0; i < number.length; i += 1) {
//   num += number[i];
//   if (num > 10) {
//     console.log(i + 1);
//     break;
//   }
// }

// console.log(num);

// ===========================
//// Написати функцію, якою передаємо ім'я, і ​​вона повертає вітання залежно від часу
// Доби (Доброго ранку\день\вечір\ночі Іван)

// function helloUser(name) {
//   let date = new Date();
//   let output = date.getHours();
//   let time = "Дорої ночі, ";
//   console.log(output);

//   if (output < 12 && output > 6) {
//     time = "Дорої ранку, ";
//   } else if (output >= 12 && output <= 16) {
//     time = "Дорий дунь, ";
//   } else if (output > 16 && output < 23) {
//     time = "Дорий вечір, ";
//   }
//   alert(`${time}${name}`);
// }
// const name = prompt("Яке у Вас імя?");
// helloUser(name);

// ==========================
////Напишіть функцію JavaScript, яка перевертає число.

// function reverse_a_number(n) {
//   const rev = String(n).split("").reverse();

//   console.log(rev);
//   return rev.join(" ");
// }
// console.log(reverse_a_number(258961)); // 169852

// дргугий спосіб

// function reverse_a_number(n) { //ПІД ПИТАННЯМ ?????????????
//   const rev = String(n).split(" ");
//   console.log(rev);

//   const newArr = [];
//   for (let i = rev.length - 1; i >= 0; i -= 1) {
//     const element = rev[i];
//     console.log(element);
//     newArr.push(element);
//   }
//   return newArr.join("");
// }

// console.log(reverse_a_number(258961)); // 169852

////Напишіть функцію JavaScript, яка перевіряє, чи переданий рядок є паліндромом?
//Паліндром - це слово, фраза чи послідовність, які читаються так само, як уперед,
//назад, наприклад, level.
// function check_Palindrome(string) {
//   const newStr = string.split("").reverse().join("");
//   return newStr === string;
// }

// console.log(check_Palindrome("level")); // true
// console.log(check_Palindrome("topot")); // true
// console.log(check_Palindrome("that")); // false
