import BSN from 'bootstrap.native'; 
//відкриваємо через локальний серве parcel (npm start)
const modal = new BSN.Modal('#subscription-modal')
// console.log(modal)
//МОДАЛКА ЗАКРИВАЄТЬСЯ ТІЛЬКИ НА ОВЕРЛЕЙ

const refs = {
    modal: document.querySelector('#subscription-modal'),
    subscribeBtn: document.querySelector('button[data-subscribe]')
}

let promptCounter = 0;//будемо рахувати ск раз відобразилося модальне вікно
let timerId = null//в змінній зберігається ідентифікатор setTimeout()
let hasSubscribed = false //зберігає в собі вибір чи натискали підписатися чи ні, міняємо в ручну на true при прослуховуванні кліку на subscribeBtn. Строка 25

const PROMPT_DELAY = 1500//затримка
const MAX_PROMPT_ATTEMPTS = 3//к-сть виводів модалки

openModal()

refs.modal.addEventListener('hide.bs.modal', () => {
    openModal()
    }) 
refs.subscribeBtn.addEventListener('click', () => {
    hasSubscribed = true
    modal.hide()
})

function openModal() { 
    if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {//якщо все true - return
        console.log('Досягнули максимальної к-сті сповіщень або відбулася підписка')
        clearTimeout(timerId)//очищаємо setTimeout()
        return
    }
    timerId = setTimeout(() => {
        console.log('відкриваємо модальне вікно')
        modal.show() //це кастомний метод відкриття модалки на самій бібліотеці bootstrap
        promptCounter += 1;
    }, PROMPT_DELAY)
}













/////////////////////////////////////////////////////////////////
//////без модалки///////////////////////////////////////////////
// const PROMPT_DELAY = 1000//затримка
// const MAX_PROMPT_ATTEMPTS = 3//к-сть виводів модалки


// let timerIntervalId = null
// let promptCounter = 0;//будемо рахувати ск раз відобразилося модальне вікно
// let hasSubscribed = false;

//  timerIntervalId = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS) {
//         console.log('Досягнули максимальної к-сті сповіщень')
//         clearInterval(timerIntervalId)
//         return
//     }
//     console.log('Підпишися на розсилку! -' + Date.now())
//     promptCounter +=1
// }, PROMPT_DELAY)

