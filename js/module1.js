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