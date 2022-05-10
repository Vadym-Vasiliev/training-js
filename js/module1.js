// 9.05  перший день , модуль 1

// додаткові плагіни : CodeSpellChecker , EsLint, template string converter.

// загальна кількість яблук і винограду

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;

// console.log(total);

// заміни вираз перевизначення комбінованим оператором

// let students = 100;
// // students = students + 50;
// //або
// students += 50

// console.log(students)

// розбери приорітет операторів в інструкції присвоєння значення змінної

// const result = 108 + 223 - 2 * 5;

// console.log(result)

// виводить в консоль. заокруглені вгору і вниз значення змінної value

// мето Math.floor(), Math.ceil(), Math.round().

// const value - 27.4;

// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

//  склади фразу за допомогою шаблонних рядків

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenseBots = 50;

// const message = `${companyName} has ${repairBots + defenseBots} bots in stock`;

// console.log(message);

// розраховує індекс маси тіла.

// let weight = '88,3';
// let height = '1.75';

// if(weight.includes(',')){
//   weight = weight.replace(',', '.')
// }
// if(height.includes(',')){
//   weight = weight.replace(',', '.')
// }

// const bmi = parseFloat(weight) / Math.pow(parseFloat(height), 2);
// console.log(bmi.toFixed(1));

//-----------------------
// const incomingValue = null;
// const defaultValue = 10;

// let value;

// if(incomingValue){
//   value = incomingValue;
// } else {
//   value = defaultValue;
// }

// коротше

// const value = incomingValue ?? defaultValue;
// console.log(value);

// скріпт який переведе. значення totalMinutes(кількість хв)  рядок у форматі годин і хв

// 70 покаже 1:10
// 450 покаже 7:30
// 1440 покаже 24:00

// const totalMinutes = 1440;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// const parsedHours = String(hours).padStart(2, 0);
// const parsedMinutes = String(minutes).padStart(2, 0);

// const result = `${parsedHours}:${parsedMinutes}`;

// console.log(result);

// ======================
// SECOND DAY JAVASCRIPT

// скріпт для відображення годин та хв у консолі браузера у вигляді рядка формат 14 год. 26 хв. Якщо значення змінної minutes дорівнює 0 то виводить рядок 14 год без хв //

// const hours = 14;
// const minutes = 0;
// let message;

// if (minutes === 0) {
//   message = `${hours} godun.`;
// } else {
//   message = `#{hours} godun. ${minutes} hvulun.`;
// }

// console.log(message);

//==============================
// виводить рядок (це число позитивне) якщо в промт користувач ввив число більше за нуль
//якщо убло введено нуль виводь у консоль рядок(Це нуль)
//якщо передали відємне  число має бути рядок (це відємне число)

// const userInput = Number(prompt("введіть число"));
// let message;

// if (userInput === 0) {
//   message = "This zero.";
// } else if (userInput > 0) {
//   message = "This optimist number.";
// } else {
//   message = "This negative number.";
// }

// console.log(message);

// ============================
// порівнює числа змінних а і б якщо обидва значення більше 100  виведе в консоль максимальне з них.
// Інакше  має бути сума значення б та числа 512

// const a = 200;
// const b = 150;

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

// або через тернарний

// if (a > 100 && b > 100) {
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// ==================================
// перевіря чи закінчується значенння змінної link символом /. якщо ні
// додай до кінця значення link цей символ

// let link = "https://my-site.com/about";

// if (!link.endsWith("/")) {
//   console.log(link + "/"); // додає / до link
// }

// ==========================
// перевіряє чи закінчується значння змінни link /
// якщо ні додай у кінець цей символ
// ал тільки тоді коли link є підрядком my-site

// let link = "https://somesite.com/about";

// if (link.includes("my-site") && !link.endsWith("/")) {
//   console.log(link + "/");
// } else {
//   console.log(link);
// }

// ===========================
//якщо значення змінної hours
//меншу 17 виводить рядок 'Pending'
// більше або = 17 і менше або = 24 рядок 'Expires'
// більше 24 рядок 'Overdue'

// const hours = 24;
// let message;

// if (hours < 17) {
//   message = "Pending";
// } else if (hours >= 17 && hours <= 24) {
//   message = "Expires";
// } else {
//   message = "Overdue";
// }

// console.log(message);

// ============================
//дедлайн 0  виводить Сьогодні
// 1 - завтра
// 2 - післязавтра
// 3+ - дата на майбутнє

// const dayUntiDeadline = 3;

// if (dayUntiDeadline === 0) {
//   console.log("Сьогодні");
// } else if (dayUntiDeadline === 1) {
//   console.log("Завтра");
// } else if (dayUntiDeadline === 2) {
//   console.log("Післязавтра");
// } else if (dayUntiDeadline >= 3) {
//   console.log("Дата на майбутнє");
// } else {
//   console.log("Некоректна дата");
// }

//===============================
//реакторинг коду задачі 7 використовуючи switch

// const dayUntiDeadline = 3;
// let message;

// switch (dayUntiDeadline) {
//   case 0:
//     message = "Сьогодні";
//     break;
//     message;
//   case 1:
//     message = "Завтра";
//     break;
//     message;
//   case 2:
//     message = "Післязавтра";
//     break;

//   default:
//     message = "Дата на майбутнє";
// }
// console.log(message);

//-=====================
//перебери цикл фор який виводить числа від мін до макс якщо число кратне 5

// const max = 108;
// const min = 28;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) console.log(i);
// }

//=========================
// якщо вводить Адмін то запитує промт пароль
// якщо нічого не введено Скасовано
// в іншому випадк Я вас не знаю
// якщо введено пароль Я адмін тоді Вітаю
// інакше Невірний пароль

// const userLogin = prompt("Введіть ваш логін");
// let userPassword;

// if (userLogin === null) {
//   console.log("Скасовано");
// } else if (userLogin !== "Адмін") {
//   console.log("Я вас не знаю");
// } else {
//   userPassword = prompt("Введіть ваш пароль");
// }
// if (userPassword === "Я адмін") {
//   console.log("Вітаю!");
// } else {
//   console.log("Невірний пароль");
// }
