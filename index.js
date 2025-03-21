// 1 Автоматические исправление заголовков
// 📌 Описание:
// У тебя есть массив строк — заголовков статей, но некоторые из них написаны в
// случайном регистре. Нужно привести их к правильному виду:
// ● Первая буква заглавная, остальные — маленькие.

// function fixHeadings(headings) {
//   return headings.map((heading) => {
//     return heading.charAt(0).toUpperCase() + heading.slice(1).toLowerCase();
//   });
// }

// console.log(fixHeadings(["I'm a movie lover", "javascript top", "I love you"]));

// ----------------------------------------------------------------------- //

// 2 Фильтр уникальных пользователей по ID
// 📌 Описание:
// Есть массив объектов с пользователями. У некоторых пользователей повторяются id.
// Нужно оставить только одного пользователя с каждым уникальным id

// function filterUniqueUsers(users) {
//   const userMap = {};
//   users.forEach((user) => {
//     if (!userMap[user.id]) {
//       userMap[user.id] = user;
//     }
//   });

//   return Object.values(userMap);
// }

// const users = [
//   { id: 1, name: "Mexa" },
//   { id: 2, name: "Chelik" },
//   { id: 1, name: "Mexa" },
//   { id: 3, name: "Sigma" },
//   { id: 2, name: "Chelik" },
// ];

// console.log(filterUniqueUsers(users));

// ----------------------------------------------------------------------- //

// 3 Поиск самой длинной подстроки без повторяющихся
// символов
// 📌 Описание:
// Дана строка. Найди самую длинную подстроку, в которой нет
// повторяющихся символов.

// ❌ //

// ----------------------------------------------------------------------- //

// 4 Комбинирование двух массивов без дубликатов
// 📌 Описание:
// Дано два массива чисел. Объедини их в один массив, удаляя повторяющиеся
// элементы.

// function mergeArrays(arr1, arr2) {
//   return [...new Set([...arr1, ...arr2])];
// }

// console.log(mergeArrays([1, 2, 3], [3, 4, 5]));
// console.log(mergeArrays([1, 2, 2, 3], [3, 4, 4, 5]));
// console.log(mergeArrays([], [1, 2]));

// ----------------------------------------------------------------------- //

// 5 Анализ голосов пользователей
// 📌 Описание:
// У тебя есть массив голосов пользователей (массив строк). Посчитай, сколько раз
// каждый вариант ответа встречается в массиве и выведи результат в виде объекта.

// ❌ //
