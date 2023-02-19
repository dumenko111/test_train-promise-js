/* Промісіфікація:
  - Проблема доступу до результату промісу з колбеком
  - Ф-ція, яка повертає проміс 
*/


const makeOrder = dish => {
  const DELAY = 1000
  const passed = Math.random() > 0.5

  return new Promise((resolve, reject) => {
    if (passed) {
      resolve(`ваше замовлення готове 🟢 ${dish}`)
    }
    reject(`упс, закінчилися продукти, немає ${dish} 🔴`)
  }, DELAY)
};

// makeOrder('булочка)')
//   .then(onMakeOrderSuccess)
//   .catch(onMakeOrderError)

function onMakeOrderSuccess(result) {
  console.log('onMakeOrderSuccess');
  console.log(result);
}

function onMakeOrderError(error) {
  console.log('onMakeOrderError');
  console.log(error);
}

  /////////////промісіфікація.......///////

const makeOrder2 = dish => {
  return Promise.resolve(`ваше замовлення готове 🟢 ${dish}`)
}

// makeOrder2('чай').then(onMakeOrderSuccess)

//☑️ПОКЕМОНИ https://pokeapi.co/
const fetchPokemonId = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)//fetch цк ф-ція яка відправляє запит на сервер//МНТОД Fetch ПОВЕРТАЄ ПРОМІC
  .then(r => r.json())
  
}

fetchPokemonId(1).then(onFetchSuccess).catch(onFetchError)
// fetchPokemonId(2)
// fetchPokemonId(3)

function onFetchSuccess(pokemon) {
  console.log('onFetchSuccess🟢', pokemon)
}

function onFetchError(error) {
  console.log('onFetchError з блоку .catch🔴', error)
}

////////////////////////////////////////////

const myPromise = () => {
  const passed = Math.random() > 0.5

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (passed) {
      resolve('це resolve🟢')
    }
      reject('це reject🔴')
  }, 1000)
  })
}

myPromise()
  .then(result => console.log(result))
  .catch(error => console.log(error))

/////////////////////////////////////////////