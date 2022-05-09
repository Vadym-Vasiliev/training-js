// const playlist = {
//   name: "My super playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackCount: 3,
// };
// console.log(playlist);
// 3 випадки коли це обєкт: const x = {}, console.log({}), function log(message){}.(обєкт це завжди справа від =)

// звернення до значення обєкту

// const playlist = {
//   name: "My super playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackCount: 3,
// };
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

// const propertyName = "tracks";

// console.log(playlist.propertyName); // дає undefined(такого свойства нету)
// console.log(playlist[propertyName]);

// короткий запис свойства

// const username = "Mango";
// const email = "mango@mail.com";

// const signupData = {
//   username: username,
//   email: email,
// };

// console.log(signupData);

// вичислємиє свойства

// const inputName = "color";
// const inputValue = "tomato";

// const colorPickerData = {
//   [inputName]: inputValue,
// };
// console.log(colorPickerData);

// силочний тип

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a); // дає true
// console.log([] === []); // false

//масиви і функції це  обєкти

// const a = [1, 2, 3];

// a.hello = "8)";

// console.log(a);

// const a = [1, 2, 3];
// a.push(4);

// console.log(a);
// ============================

// обявляється метод

// const playlist = {
//   name: "My super playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackCount: 3,

//   getName() {
//     console.log("aga eto getName");
//   },
// };

// console.log(playlist);
// playlist.getName();

// =================================
// методи

// const playlist = {
//   name: "My super playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackCount: 3,

//   changeName(newName) {
//     console.log("this внутри changeName: ", this);
//     this.name = newName; // зміноє старий на  нове імя
//   },

//   addTrack(track) {
//     this.tracks.push(track); // додає новий трек
//   },

//   updateRating(newRating) {
//     this.rating = newRating; // змінює старий на новий рейтінг
//   },
// };

// console.log(playlist);
// playlist.changeName("novoe imia");
// playlist.addTrack("novui track");
// playlist.updateRating("novui rating");

// =================================

// переблор обекта

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);
// }

// let totalFeedback += feedback[key];

// console.log(totalFeedback);

// -----------------------

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }

// console.log(totalFeedback);

// =========================
// колекція

// const friends = [
//   {
//     name: "Mango",
//     online: false,
//   },
//   {
//     name: "Kiwi",
//     online: true,
//   },

//   {
//     name: "Poly",
//     online: true,
//   },

//   {
//     name: "Ajax",
//     online: false,
//   },
// ];

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend); // перебирає обєкт в масиві

//   friend.newprop = 555; // додає нове свойство в обєкти
// }

// console.table(friends);

// ===============================

// const friends = [
//   {
//     name: "Mango",
//     online: false,
//   },
//   {
//     name: "Kiwi",
//     online: true,
//   },

//   {
//     name: "Poly",
//     online: true,
//   },

//   {
//     name: "Ajax",
//     online: false,
//   },
// ];

// console.table(friends);

// const findFriendByName = function (allFriends, name) {
//   for (const friend of allFriends) {
//     if (friend.name === name) {
//       // перебирає по імені
//       return "NASHLI!";
//     }
//   }

//   return "NE NASHLI!";
// };

// console.log(findFriendByName(friends, "Chelsy"));

// includes не працює з обєктами масиву

//-=============================

// получить всех  друзей которие офлайн

// const friends = [
//   {
//     name: "Mango",
//     online: false,
//   },
//   {
//     name: "Kiwi",
//     online: true,
//   },

//   {
//     name: "Poly",
//     online: true,
//   },

//   {
//     name: "Ajax",
//     online: false,
//   },
// ];

// console.table(friends);

// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];
//   for (const friend of allFriends) {
//     console.log(friend.online);

//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }

//   return offlineFriends;
// };

// console.log(getOfflineFriends(friends));

//============================
// создать 2 масіва онлайн і офлайн які вертають друзів

// const friends = [
//   {
//     name: "Mango",
//     online: false,
//   },
//   {
//     name: "Kiwi",
//     online: true,
//   },

//   {
//     name: "Poly",
//     online: true,
//   },

//   {
//     name: "Ajax",
//     online: false,
//   },
// ];

// const getFriendByOnlineStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     }
//     friendsByStatus.offline.push(friend);
//   }

//   return friendsByStatus;
// };

// console.log(getFriendByOnlineStatus(friends));

//=========================================
// порахувати кількість свойств в цьому обєкті
// const x = {
//   a: 1,
//   b: 2,
//   c: 50,
//   d: 100,
// };
// console.log(Object.keys(x).length);

//============================
// товари в корзіні
