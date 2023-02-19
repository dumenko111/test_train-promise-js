const promise = new Promise((resolve, reject) => {
  const canFulfilled = Math.random() > 0.5; //генерує true або false

  setTimeout(() => {
    if (canFulfilled) {
    resolve('проміс виконаний успішно✅')
  } 
  reject('проміс виконаний з помилкою❌')
}, 1000)

  })
promise.then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log('блок finally буде виконаний в будь якому випадку 🟢'))