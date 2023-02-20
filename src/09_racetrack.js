const horses = ['Secretariat', 'Eclipse', 'West Australian', 'Flaying Fox', 'Seabiscuit',]

const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table > tbody')
}

let raceCounter = 0 //для ведення порядкового № заїзду в таблиці

refs.startBtn.addEventListener('click', onStart)


function onStart() {
    raceCounter += 1
    const promises = horses.map(runHorse)//получиться масив промісів/масив коней мапнули і передали в runHorse

    refs.winnerField.textContent = '' //очищаємо перед кожним заїздом 
    refs.progressField.textContent = 'Заїзд розпочався, ставки не приймаються!'

    determineWinner(promises)
    waitForAll(promises)
}

function determineWinner(horsesP) {//ф-ція повертає преший проміс, який найшвидше виконався
    Promise.race(horsesP).then(({ horse, time }) => {//Promise.race() повертає найшвидший результат
    refs.winnerField.textContent = (`Переміг ${horse}, фінішував за ${time}`)

    updateResultsTable({horse, time, raceCounter})
    })
}

function waitForAll(horsesP) {//ф-ція повертає всі проміси
    Promise.all(horsesP).then((result) => {//Promice.all() повертає всі проміси після закінчення орезультату роботи останнього
    refs.progressField.textContent = 'Заїзд завершився, приймаються ставки', result})
}


function getRandomTime(min, max) {//ф-ція, яка буде повертати рандомний час від min до max
    return Math.floor(Math.random() * (max - min +1) + min)
}

function updateResultsTable({ horse, time, raceCounter }) {//ф-ція добавляє розмітку з переможцями в табличку
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}


function runHorse(horse) {//проміс, який повртає резолв об'єкт з значенням коня і часом
    const time = getRandomTime(1000, 3000)

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({horse, time})
        }, time)
    })
}











