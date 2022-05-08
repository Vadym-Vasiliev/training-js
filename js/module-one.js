// ПОВТОРЕННЯ З САМОГО ПОЧАТКУ

// МОДУЛЬ 1 - ЗМІННІ  ТА  РОЗГАЛУЖЕННЯ

// module - захисна оболонка , яка дає можливість робити однакові змінні
// приклад : <script src='js/file.js' type='module'></script>

// ЗМІННІ І ТИПИ ПРИМІТИВІВ

// const age = 10; //обявив зміну age і дав їй значення число 10;
// const totalPrice = 200.74; // число
// const userNAme = 'Vadym'; // строка
// const message = 'Dobro pojalovat';// строка
// const isOpen = true;// boolien true (да)
// const shouldConfirm = false; // boolien false (ні)

// const x = 5;
// const x = 10; //не можна створити дві однакових змінні і дати різні значення

// let x = 5; // let змінні яку можна змінити
// x = 10;

// console.log() виводить в console

// коли виводиш число буде синього кольору також сині  - boolien
// коли чорного - строка

// typeof вертає який саме тип--------------

// const type = typeof true;
// console.log(type);

// alert - блокує поки не буде підтвердження----------
// alert("yes or not");
// console.log(alert);

//====================================================================

// window.confirm() or window.prompt()

// підтвердження на підписку приклад:
// yes дає true
// no дає false

// const shouldRenew = confirm("pidpuska?");
// console.log(shouldRenew);

// yes дає значення яке ввели або пуста строка
// no дає null(ничего)
// завжди вертає строку!

// let quantity = prompt("skilku?");
// quantity = Number(quantity) || String(quantity); // робить зі строки число і навпаки

// console.log(quantity);
// console.log(typeof quantity);

// ---------------------------------------------
// ЧИСЛА ЦІЛІ НЕЦІЛІ
// Number.parseInt() Number.parseFloat()

// parseInt-------

// let elementWidth = "50px";
// elementWidth = Number.parseInt(elementWidth);

// console.log(elementWidth); // парсить (вертає чисте число 50)

// parseFloat--------

// let elementWidth = "200.74px";
// elementWidth = Number.parseFloat(elementWidth); // додає  часла після коми забіраючи лишнє

// console.log(elementWidth);

// toFixed--------

// let salary = 1300.123123;
// salary = salary.toFixed(0); //забирає числа після крапки
// salary = Number(salary); // робить числом

// console.log(salary);

// --------------------------------
// NaN - not are number (не є числом)

// let quantity = "30";
// let value = "etu stroku ne vozmojno prevratit v chislo";

// console.log(Number(quantity)); // повертає число
// console.log(Number(value)); // повертає NaN

// ----------------------------------
// Обєкт Math - для роботи з матиматикою

// const base = 2;
// const power = 3;

// const result = Math.pow(base, power); // 2 в 3 степінні,буде 8.

// console.log(result);
// console.log(base ** power) //так само

// ---------------------------------
// Напиши скріпт який просить користувачи ввести число в степені
// виводить число в цю степень і виводить результат в консоль

// АЛГОРИТМ

// - попросити ввести число і зберегти в змінну

// let base = prompt("davai chislo");
// base = Number(base);

// console.log(base);

// // - попросити ввести степінь і зберегти в змінну

// let power = prompt("davai stepin");
// power = Number(power);

// console.log(power);

// // - вивести введення данні в степінь і вивести

// const result = base ** power;
// console.log(result);

// -----------------------------------------
// Генерація випадкових чисел
// Math.random()
// Math.round()

// console.log(Math.random()); // дає ренжомне число

// const max = 50;
// const min = 30;

// console.log(Math.random() * (max - min) + min); // рендомні числа від 30 до 50

// const max = 50;
// const min = 30;

// const result = Math.round(Math.random() * (max - min) + min); // округляє числа

// console.log(result);

// ============================================================
// Довжина строки LENGTH

// let message = "v etoi stroke 26 simvolov.";
// message = message.length; // підраховує довжину строки
// console.log(message);

// Конкатинація - зшиває строки--------

// const firstName = "Vadym";
// const lastName = "Vasiliev";

// const fullName = firstName + lastName; // зєднує дві строки

// console.log(fullName);

// const firstName = "Vadym";
// const lastName = "Vasiliev";

// const fullName = firstName + " " + lastName; // зєднує але додає пробіл між строками

// console.log(fullName);

// -------------------------------

//напиши скріпт який виводить строку в форматі
// гість х у засляється в z номер q
// підставити замість x y z q значення змінних

// const room = 716;
// const type = "VIP";
// const firstName = "Vadym";
// const lastName = "Vasiliev";

// // const welcomeMessage =
// //   "Gist " +
// //   firstName +
// //   " " +
// //   lastName +
// //   " posulyaetsa v" +
// //   " " +
// //   type +
// //   " " +
// //   room +
// //   " nomer";

// console.log(welcomeMessage);

// КОРОТША версія з ${} - шаблоні строки

// const quantity = 5;
// const orderMsg = `vu zakazalu ${quantity} holodulnikiv`;

// console.log(orderMsg);

// =====================================

//  toLowerCase нормалізує в нижній регістр

// const brand = "Samsung";
// const normalizedBrand = brand.toLocaleLowerCase(brand); // робить всі символи в нижньому регістрі

// console.log(normalizedBrand);

// --------------------------------------
// пошук в строці includes()
// шукає заборонені слова (spam, sale)

// const black1 = "spam";
// const black2 = "sale";

// const string1 = "privet ya abdul eto ne spam";
// const string2 = "big all SALE";
// const string3 = "reklama qo ma qo";

// console.log(string1.includes(black1)); //spam є дає true
// console.log(string1.includes(black2)); //sale нету дає false

// console.log(string2.includes(black1)); // spam немає дає false
// console.log(string2.toLowerCase().includes(black2)); // sale є дає true

// console.log(string3.includes(black1)); // false
// console.log(string3.includes(black2)); // false

// =============================================
// ОПЕРАТОРИ ЗРІВНЮВАННЯ

// console.log(15 > 10); //true
// console.log(5 > 10); //false

// ------------

// console.log(true > 5); // 10,5 - операнди , а > - оператор, дає false бо true це 1(false - 0)

// --------------
// === строге равенство,  == не строге равенство
// !== і !=== (! - нєравенство)

// const isEqual = false == 0; // виводить true (false це 0 = 0 = true)
// console.log(isEqual);

// const isEqual = true !== 0; // виводить true (true це 1 !== 0 = true)
// console.log(isEqual);
// ============================
// ЛОГІЧНІ ОПЕРАТОРИ
// ДО Boolien

// console.log(Boolean(false)); //0,NaN,null,undefind, ''. все виводить false (false = 0)

// ЛОГІЧН И (&&)зупиняється на брехні на першому false

// console.log(5 && 6 && 7 && "hello"); // виводить строку hello бо до 'hello' не було false
// console.log(false && "hello"); // виводть false , тут є false , далі не рахує

// ЛОГІЧНА ИЛИ (||)

// console.log(5 || 7 || 8 || 10); // виводить 5 тому що зупиняється на правді
// console.log(false || 0 || 7); // виводить 7 (false , 0 пропускає бо це брехня , 7 це правда)

// ЛОГІЧНА НЕ (!)

// console.log(!false); //виводить true (працює навпаки)
// console.log(!true); // виводіть false

// ====================================================
// ЗАДАЧІ

// const x1 = 10;
// const x2 = 30;
// const number = 15;

// входить 15 до x1?

// console.log(`chislo ${number} popadae v vidrizok ${x1}`, number < x1); // 15 не менше х1 тому false

// // входить 15 після х2?

// console.log(`chislo ${number} popadae v vidrizok ${x2}`, number > x2); // false

// //входить 15 от х1 до х2?

// console.log(
//   `chislo ${number} popadae v vidrizok ot ${x1} do ${x2}`, // true 15 вхоидть від x1 та входить до x2
//   number > x1 && number < x2
// );

// // вхоидить до х1 или послу х2?

// console.log(
//   `chislo ${number} popadae v vidrizok do ${x1} i ot ${x2}`, // false
//   number < x1 || number > x2
// );

// ================================

//провіряє можливість відкрити чат користувачу
// для цього має бути другом, онлайн, без режиму не турбувати

// const isOnline = true; //онлайн
// const isFriend = true; //друг
// const isDnd = true; //режим

// const canOpenChat = isOnline && isFriend && isDnd;
// console.log("mogno zaiti? ", canOpenChat);

// =================================

// скріпт провірки підписки до доступно к контенту
// три типи підписки : free, pro, vip
// доступ мають тільки pro, vip

// const sub = "free";

// const can = sub === "pro" || sub === "vip";

// console.log("est dostup?", can); // дає false тому що free немає доступу

// ======================================

// IF (ЕСЛИ)------

// if (5 < 3) {
//   // якщо  буде  false в if() тоді  тіло if не виконується (qwqwe)
//   console.log("qwqwe");
// }

// if (5 > 3) {
//   console.log("qweqwe"); //  тіло покаже в консолі бо 5 > 3 це  true
// }

// IF ELSE--------

// if (5 > 30) {
//   console.log("x > y");
// } else {
//   console.log("x < y"); // покаже  else
// }

// if (35 > 30) {
//   console.log("x > y"); // покаже  if
// } else {
//   console.log("x < y");
// }

// --------------------------------
// const salary = 1000;

// if (salary < 500) {
//   console.log("eroven-1");
// } else if (salary > 500 && salary < 1500) {
//   console.log("eroven-2"); // бо 1000 входить до 1500 і від 500
// } else {
//   console.log("error"); // якщо число не підходть буде  - (error)
// }

// -------------------------
//ТЕРНАРНИЙ ОПРАТОР

// const balance = 1000;

// // let message;
// // if (balance >= 0) {
// //   message = "pozitive balance";
// // } else {
// //   message = "negative balance";
// // }
// // коротше

// const message = balance >= 0 ? "pozitive balance" : "negative balance";

// console.log(message);

// ------------------------
//блочная область видимості
// const b = 10;

// if (true) {
//   const a = 5;
//   console.log(a); // змінна а існує тільки в if
// }

// console.log(b);

// ========================================
// Модуль-1 Ветвления и цикли
// IF

//  варість готелю по кількості зірок
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$.

// const stars = 5;
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
// } else {
//   console.log("TAKOI KILKOSTI ZIROK NEMAE");
// }

// console.log(price);

//  SWITCH

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
//     console.log("TAKOI KILKOSTI ZIROK NEMAE");
// }

// console.log(price);

// ======================================
// вибір вартостіі  готелю в кількості зірок
// 1,2  - 20$, 3,4 - 30$, 5 - 120$

// const stars = 5;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("TAKOI KILKOSTI ZIROK NEMAE");
// }

// console.log(price);

// switch

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;
//   case 3:
//   case 4:
//     price = 30;
//     break;
//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log("TAKOI KILKOSTI ZIROK NEMAE");
// }

// console.log(price);

// SWITCH це тільки на РАВЕНСТВО
// IF ELSE  > < + - % * ==

// --------------------------
// вибір опції доставки  товар
// вони зберігаються в змінних 1 - самовивіз, 2 - курєр, 3 - пошта
//  в змінну message записати смс в залежності від опції
// - 'Ви зможете забрати товар завтра з 12 години в нашому офісі'
// - 'Курєр доставить замовлення завтра з 9 до 18'
// - 'Посилка буде відправлена сьогодні  '
// - 'Вам зателефонує менеджер'

// Алгоритм
// 1. Зробити змінні
// 2. зробити switch 1,2,3
// 3. в кожному кейсі зробити смс
// 4. зробити лог message

// const option = 4;
// let message = "";

// switch (option) {
//   case 1:
//     message = "Ви зможете забрати товар завтра з 12 години в нашому офісі";
//     break;
//   case 2:
//     message = "Курєр доставить замовлення завтра з 9 до 18";
//     break;
//   case 3:
//     message = "Посилка буде відправлена сьогодні";
//     break;

//   default:
//     console.log("Вам зателефонує менеджер");
// }

// console.log(message);

// ================================
// ЦИКЛ FOR
// for (инициализация; условие; пост - виражение){
// тело цикла
// }

// for (let i = 0; i <= 100; i += 5) {
//   console.log(i);
// }
// console.log("false");

// Pre and Post-increment-------------------(ЦЕ ЗЛО)

// let a = 10;
// const b = a++;

// console.log(a); // додає 1 до а буде 11 але після того як виконається b
// console.log(b);

// -----------------------------
// напиши скріпт який  підрахує загальну суму зарплати
// кількість працівників в змінній employees
// зп кожного робітника випадкове число від 500 до 5000
// записати суму в змінну totalSalary і вивести в консоль

//алгоритм

// 1. зробити вари
// 2. перебрати робітників
// 3. згенерувати випадкове зп
// 4. добавити до тоталу
// 5. вивести лог

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 3;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary + minSalary) + minSalary
//   );
//   console.log(`zp pracivnuka nomer ${i} - ${salary}`);

//   totalSalary += salary;
// }
// console.log("totalSalary:", totalSalary);// підраховує  зп кожного працівника і загальну  суму

// --------------------------------
// скріпт який підраховує суму  всіх парних чисел
// які  входять в діапазон в змінних від мін до макс

// остаток ділення console.log(10 % 3 = 1, 7 % 3 = 1, 5 % 3 = 2)

// фор от мін до макс
// остаток ділення
// пишемо в суму

// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   console.log(i);

//   if (i % 2 === 0) {
//     console.log("parne: ", i); // вибирає парні числа які діляться на 2 без остатку

//     total += i; // дає загальну суму
//   }
// }

// console.log("total: ", total);

// 2 модуль 23 задача-----------------------

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filterNew = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filterNew.push(number);
//     }
//   }

//   return filterNew;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// модуль 2 задача 25------------------------------

// методи  перебирання масиву:
//

function getCommonElements(array1, array2) {
  // Change code below this line
  let newElements = [];

  for (const elementArray of array1) {
    if (array2.includes(elementArray)) {
      newElements.push(elementArray);
    }
  }

  return newElements;
}

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
