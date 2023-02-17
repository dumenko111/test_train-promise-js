//метод window.setTimeout(callback, delay, args)


// const timeoutId = setTimeout(() => {
//     console.log('Hello')
// }, 1000)

const logger = time => {
    console.log(`Лог через ${time}ms тому що не відминили setTimeout`)
};

const timerId = setTimeout(logger, 1000, 1000);//викликаємо setTimeout() і передаємо їй ф-цію вище

const shouldCancelTimer = Math.random() > 0.3;//рандомно true або false

if (shouldCancelTimer) clearTimeout(timerId)//якщо true очищуємо setTimeout()





