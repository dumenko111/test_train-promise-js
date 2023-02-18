//метод setInterval(callback, delay, args)

const logger = time => console.log(`Лог кожні ${time}ms - ${Date.now()}`);

const timerIntervalId = setInterval(logger, 1000, 1000);

const shouldCancelTimerInterval = Math.random() > 0.3;
console.log(`Очищаємо setInterval ${shouldCancelTimerInterval}`)

if(shouldCancelTimerInterval) clearInterval(timerIntervalId)
