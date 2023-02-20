// // ⌚️Task1 👍 - Ф-ції resolve і reject
// //✏️Зробити проміс, всередині якого буде затримка setTimeout в 3c, після якої проміс має виконатися ✅ зарезолвитися,
// const resolvePromise = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('це resolvePromise, виконана успішно ✅')
//     }, 3000)
// })
// // resolvePromise.then(result => console.log(result))
// //➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// //✏️Зробити проміс, всередині якого буде затримка setTimeout в 3c, після якої проміс має виконатися ❌ реджекнутися,
// const rejectPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // reject('це rejectPromise ❌')
//     }, 3000)
// })
// // rejectPromise.catch(err => console.log(err))
// //➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// //✏️Зробити ф-цію, яка буде генерувати випадкове число від 1 до 10
// //✏️Згенероване число має бути затримкою setTimeout() в секундх. Обгорнути це все в проміс
// //✏️Проміс виконується успішно, якщо згенероване число від 1 до 5 і з посилкою якщо від 6 до 10
// const getRandomNumb = () => Math.floor(Math.random() * 10) + 1;//рандомно повертає від 1 до 10

// const promise = new Promise((resolve, reject) => {
//     const randomNumbTime = getRandomNumb()

//     setTimeout(() => {
//         if (randomNumbTime <= 5) {
//             resolve('✅promise виконаний успішно', randomNumbTime)
//         } else {
//             reject('❌проміс reject', randomNumbTime)
//         }
//     }, randomNumbTime * 1000)
// })
// // promise.then(result => console.log(result))
// //     .catch(err => console.log(err))

// //➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// // ⌚️Task2 👍 - Зробити проміс, який через 2с випадковим чином виконається успішно або з помилкою.Застосуйте метод catch для відловлювання помилки
// const promise3 = new Promise((resolve, reject) => {
//     const randomNumber = Math.random() > 0.5

//     setTimeout(() => {
//         if (randomNumber) {
//             resolve('RESOLVE✅')
//         } else {
//             // reject('ERROR❌')
//         }
//     }, 2000)
// })
// // promise3
// //     .then(result => console.log(result))
// //     .catch(err => console.log(err))

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

// ⌚️Task3 👍 Зрбити чейнінг з 3 промісів. Перший проміс повертає число, а кожен наступний через 2с. взводив в квадрат резкльтат попереднього промісу. В кінці вивести результат алертом
// const getNewPromise = n => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(n * n)
//         }, 2000)
//     })
// }

// Promise.resolve(3)
//     .then(getNewPromise)
//     .then(getNewPromise)
//     .then(getNewPromise)
//     .then(alert)

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// ⌚️Task4 👍Зробити 3 проміси, в кожному з яких є ф-ція setTimeout з випадковою затримкою від 1 до 5с.
// Кожний проміс своїм результатом повертає свою затрику. За допомогою Promise.all отримати масив результатів і вивести його суму на екран

const getRandomPromise = () => {
    return new Promise(resolve => {
        const randomNumb = Math.floor(Math.random() * 5) + 1
        console.log(randomNumb)
        
        setTimeout(resolve, randomNumb * 1000, randomNumb)//1 аргумент resolve/2 аргумент рандомна затримка від 1 до 5 помножена на 1000/ 3 аргумент передається для 1 параметра
    })
}

const promise1 = getRandomPromise()
const promise2 = getRandomPromise()
const promise3 = getRandomPromise()

Promise.all([
    promise1, promise2, promise3
]).then(numbersP => {
    const sum = numbersP.reduce((acc, el) => acc + el)
    console.log('sum', sum)
})