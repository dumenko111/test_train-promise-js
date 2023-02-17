/*Показуємо і приховуємо добавляючи і видаляючи клас is-visible
    -приховуємо через певний час
    -приховуємо при кліку
    -не забуваємо чистити таймер*/
    
const refs = {
    notification: document.querySelector('.js-alert')
}
refs.notification.addEventListener('click', onNotificationClick)
refs.notification.addEventListener('mouseenter', mouseEnter)//при наведені мишкою по вспливаючому вікні setTimeout() очищається


let timerId = null
showNotification()



function onNotificationClick() {
    hidenNotification()
    clearTimeout(timerId)//клікнувши по вспливаючому вікну ми очистили setTimeout() і він не виконався
}

function showNotification() {
    refs.notification.classList.add('is-visible')
    
    timerId = setTimeout(() => {//закриваємо через 3с вспливаюче вікно
        console.log('вспливаюче вікно закрилося після виконання setTimeout()')
        hidenNotification()
    }, 3000)
}

function hidenNotification() {
    refs.notification.classList.remove('is-visible')
}

function mouseEnter() {
     clearTimeout(timerId)//навівши мишкою  по вспливаючому вікну ми очистили setTimeout() і він не виконався
}