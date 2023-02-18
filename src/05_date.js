/*- Створення
  - Unix-час відраховується від 01.01.1970
  - Методи
  - Різниця часу
  - Date.now()
*/
const date = Date.now();     //Різниця між new Date() i Date.now() в тому що new Date() створює обєкт з методами і т.д., а Date.now() статичний метод просто виводить час
console.log(date)//дата виводиться як об'єкт

setTimeout(() => {
  const date2 = Date.now();
  console.log(date2)

  console.log(date2 - date)//ми побачимо різницю в 3секунди
}, 3000)

