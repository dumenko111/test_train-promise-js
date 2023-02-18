
const refs = {
  startBtn: document.querySelector('button[data-action-start'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface')
}


class Timer { 
  constructor({ onTick }) { //деструктуризуємо
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;

    this.init()
  }

  init() {//метод класу!!!
    const time = this.getTimeComponents(0)
    this.onTick(time)
  }

  start() {//метод класу!!!
    if (this.isActive) {
      return
    }
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId =  setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;//передаємо аргументом різницю між currentTime i startTime
      // console.log(deltaTime)

      const time = this.getTimeComponents(deltaTime)//використовуємо ф-цію, яка переводить мілісекунди в год, хв і секунди / також робимо деструктуризацію🥲
      this.onTick(time)
    }, 1000)
  }

  stop() {  //метод класу!!!
    clearInterval(this.intervalId)
    this.isActive = false
    const time = this.getTimeComponents(0)
    this.onTick(time)
  }

  /*ЦЯ Ф-ЦІЯ ПРИЙМАЄ ЧАС В МІЛІСЕКУНДАХ - ВИРАХОВУЄ С-КИ В НИХ ПОМІЩАЄТЬСЯ ГОДИН.ХВИЛИН.СЕКУНД
  ПОВЕРТАЄ ОБ'ЄКТ ІЗ ЗНАЧЕННЯМИ hours, mins, secs */
  getTimeComponents(time) { //метод класу!!!
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % 1000 * 60 * 60) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return {hours, mins, secs}
  }

  /*ЦЯ Ф-ЦІЯ ПРИЙМАЄ ЧИСЛО, ПРИВОДИТЬ ЙОГО ДО СТРОКИ І ДОБАВЛЯЄ В ПОЧАТОК, ЯКЩО ЧИСЛО МЕНШЕ 2х ЗНАКІВ 0, ЯКЩО ЧИСЛО ДВОЗНАЧНЕ - НІЧОГО НЕ РОБИТЬ */
  pad(value) {
    return String(value).padStart(2, '0')
}
}

const timer = new Timer({ onTick: updateClockface })//передаємо ф-цію updateClockface аргументом в параметри як об'єкт настройок

refs.startBtn.addEventListener('click', timer.start.bind(timer))
refs.stopBtn.addEventListener('click', timer.stop.bind(timer))

function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`
}

