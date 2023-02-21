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

// const getRandomPromise = () => {
//     return new Promise(resolve => {
//         const randomNumb = Math.floor(Math.random() * 5) + 1
//         console.log(randomNumb)
        
//         setTimeout(resolve, randomNumb * 1000, randomNumb)//1 аргумент resolve/2 аргумент рандомна затримка від 1 до 5 помножена на 1000/ 3 аргумент передається для 1 параметра
//     })
// }

// const promise1 = getRandomPromise()
// const promise2 = getRandomPromise()
// const promise3 = getRandomPromise()

// Promise.all([
//     promise1, promise2, promise3
// ]).then(numbersP => {
//     const sum = numbersP.reduce((acc, el) => acc + el)
//     console.log('sum', sum)
// })

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// ⌚️Task5 👍Зробити 3 проміса, в кожному ф-ція setTimeout() з випадковою затримкою від 1с до 5с. Перший проміс повертає 1, другий 2, третій 3
//За допомогою Promice.race вивести результат першого який виконається

// const getRandomPromise = value => {
//     return new Promise(resolve => {
//         const randomNumb = Math.floor(Math.random() * 5) + 1
        
//         setTimeout(resolve, randomNumb * 1000, value)//1 аргумент resolve/2 аргумент рандомна затримка від 1 до 5 помножена на 1000/ 3 аргумент передається для 1 параметра
//     })
// }
// const promise1 = getRandomPromise('Орел')
// const promise2 = getRandomPromise('Решка')


// Promise.race([
//     promise1, promise2
// ]).then(first => console.log(first))

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
// ⌚️Task6 👍 є 3 картинки. За допомогою Promice.all дочекатися завантаження всіх картинок і вивести їх на екран

const images = [
    'https://images.pexels.com/photos/15415636/pexels-photo-15415636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/9027262/pexels-photo-9027262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/14936356/pexels-photo-14936356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
]

const getImage = src => {
    const image = document.createElement('img')
    image.src = src
    image.width = 200

    return new Promise((resolve, reject) => {
        // resolve(image)
        // reject('Error download image')
        image.onload = () => resolve(image)
        image.onerror = () => reject('ERROR')
    })
}

Promise.all(images.map(getImage))
    .then(imageList => document.body.append(...imageList))
    .catch(err => console.log(err))