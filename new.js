// console.log("helldo");


// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки

//     let howManyWords = message.split(' ');
//     return console.log( howManyWords.length * pricePerWord);

//   // Пиши код выше этой строки
// }



// calculateEngravingPrice('JavaScript у меня в крови', 10);
// calculateEngravingPrice('JavaScript у меня в крови', 20);


// function slugify(title) {
//   // Пиши код ниже этой строки

//   let slag = title.toLowerCase().split(' ').join('-');
//   return console.log(slag);


//   // Пиши код выше этой строки
// }


// // slugify('Массивы для новичков')
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,-1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
// let newArray = firstArray.concat(secondArray);
// if(newArray => maxLength){
//   return console.log(newArray.slice(0,maxLength));
// }
//     return console.log(newArray);
//     // Пиши код выше этой строки
// }

// makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3);
// makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4);
// console.log("hello");
const ex4 = [2, 3, 1, 21, 35];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log("1", arr[i]);
    for (let j = 0; j < arr.length; j++) {
      // console.log("2", arr[j]);
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

// console.log(bubbleSort(ex4));


// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//   let sum = 0;
// for (let i= 0;  i <= number; i += 1) {
//   sum += 1;
// }
//   return sum;
//   // Пиши код выше этой строки
// }




// function calculateTotal(number) {
//  let sum = 0;
//    for (let i = 0; i <= number; i += 1) {
//     sum += i;
//    }
//    return sum;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
// for (let num of order){
//   total += num;
// }
//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));


// function findLongestWord(string) {
//   const splitArr = string.split(' ');
//   let longest = splitArr[0];

//   for (const text of splitArr) {
//     if (text.length > longest.length)
//       longest = text
//   }

//   return longest;
//   // Пиши код выше этой строки
// }


// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
// for(let i = min; i <= max; i += 1) {
//   numbers.push(min = i);
//   }
//   // console.log(numbers);
//   // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(1,3));


// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//       const newArray = [];

// for (const number of numbers) {
//   if (number >= value) {
//      newArray.push(number);
//   }
//   // Пиши код выше этой строки
// }
//    return newArray;
// }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));


// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   const allArray = [];
//   if (array1.includes(array2)) {
//     allArray.push(array1);
//   }

//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
//   let total = [];

//   for (let i = start; i <= end; i++) {
//     // console.log(i);
//     if (i % 5 === 0) {
//       console.log(i);
//       total.push(i);
//     }
//   }

//   return total;
//     // Пиши код выше этой строки
// }

// console.log(getEvenNumbers(1, 10));


// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (let key in apartment) {
//   key = keys.push(key);
// }
// for (let value in apartment) {
//   value = values.push(apartment[value]);
// }

// console.table(keys);
// console.table(values);

// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   for (let key in object) {
//     // console.log(key);

//   if (object.hasOwnProperty(key)) {
//     propCount += 1;
//     // console.log(key);

//   }
// }
//   // Пиши код выше этой строки
//   return propCount;
// }

// countProps({});
// countProps({ name: 'Mango', age: 2 });
// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// console.log(keys);
// for (let key of keys) {
//   key = values.push(apartment[key]);
// console.log(keys);
// }

// // console.log(values);

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (let color of colors) {
//   hexColors.push(color.hex);
// rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// // console.log(roduct);
// function getProductPrice(productName) {
//   // Пиши код ниже этой строки

//   for (const product of products ){
//     // console.log(product);
//     if (productName === product.name) {
//       // console.log(total.name);
//        return  product.price * product.quantity;
//     }
//   }
//   return 0;
//   // Пиши код выше этой строки
// }

// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('Сканер'));
// console.log(getProductPrice('Дроид'));
// console.log(getProductPrice('Захват'));

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// console.log(roduct);
// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   const valuesName = [];
//   for (const product of products ){
//     // console.log(product);
//     for (const key in product) {
//       if (productName === key) {
//         // console.log(total.name);
//         valuesName.push(product[key]);
//       }
//     }
//   }
//   return valuesName;
//   // Пиши код выше этой строки
// }

// console.log(getProductPrice('name'));
// console.log(getProductPrice('price'));
// console.log(getProductPrice('quantity'));
// console.log(getProductPrice('Захват'));

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
// let newObj= {category,priority, ...data, completed};
//   // Пиши код выше этой строки
//   return newObj;
// }

// console.log(makeTask({}));

// Пиши код ниже этой строки
// function add(...args) {
//   // console.log((args));
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
//   // Пиши код выше этой строки
// }
// console.log(add(15, 27));

// function addOverNum(values, ...args) {
//   let total = 0;
//   const value = values;
//   // console.log(value);
//   for (let arg of args) {
//     if(value <= arg){
//     total += arg;
//     }
//   }

//   return total;
//   // Пиши код выше этой строки
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// Пиши код ниже этой строки
// function findMatches(array, ...args) {
//   const matches = []; // Не изменяй эту строку
//   for (const number of args) {
//     if (array.includes(number)) {
//       matches.push(number);
//     }
//   }
//   // Пиши код выше этой строки
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//     const delBook = this.books.indexOf(oldName);
// 	this.books.splice(delBook,1,newName);
//     console.log(this.books);

//     // Пиши код выше этой строки
//   },
// };
// console.log(bookShelf.updateBook('Последнее королевство', 'Дюна')); 
// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {

//     return this.potions;

//   },
//   addPotion(potionName) {
//     // console.log(potionName);
//     for (const potion of this.potions) {
//       if (potion === potionName) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }
//     }
//     // if (this.potions.includes(potionName)) {
//     //   return `Зелье ${potionName} уже есть в инвентаре!`;
//     // }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Зелья ${potionName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Зелья ${oldName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Пиши код выше этой строки
// };


// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Каменная кожа', price: 520 }));

// 7) Напиши скрипт управления личным
// кабинетом интернет банка.
// Есть объект account в котором необходимо
// реализовать методы для работы
// с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(type, amount) {
    return {
      type,
      amount
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта
   * транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const transactionType = this.createTransaction(Transaction.DEPOSIT, amount);
    this.transactions.push(transactionType);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта
   * транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи
   * сообщение
   * о том, что снятие такой суммы не возможно,
   *  недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return "Снятие такой суммы не возможно, недостаточно средств";
    } else {
      this.balance -= amount;
      const transactionType = this.createTransaction(
        Transaction.WITHDRAW,
        amount
      );
      this.transactions.push(transactionType);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const [index, transaction] of this.transactions.entries()) {
      if (index === id) {
        return transaction;
      }
    }
    // for (let i = 0; i < this.transactions.length; i++) {
    //   if (i === id) {
    //     return transaction[i];
    //   }
    // }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории
   * транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (transaction of this.transactions) {
      if (transaction["type"] === type) {
        sum += transaction["amount"];
      }
    }

    return sum;
  }
};

// account.deposit(1000);
// account.deposit(2000);
// account.withdraw(500);

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));

// console.log({ balance: account.balance, transactions: account.transactions });

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
// Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];
//       if (potionName === name) {
//         potions.splice(i, 1);
//       }
//     }

//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       console.log(potion);
//       if (oldName === potion.name) {

//         return potion.name = newName;
//       }
//     }
//   }
// };
// console.table(atTheOldToad.potions);
// console.table(atTheOldToad.updatePotionName('Дыхание дракона', 'Зелье неуязвимости'));
// // atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости');
// console.table(atTheOldToad.potions);
const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {
    for (const pizza of pizzaPalace.pizzas) {
      if (pizzaName === pizza) {
        return onSuccess(pizzaName);
      }
    }
    return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
  },
};
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));

const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter((e) => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  // console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

function StringBuilder(baseValue) {
this.value = baseValue;
};

StringBuilder.prototype.getValue = function () {
  // console.log(this.value);
  return this.value;
};
StringBuilder.prototype.padEnd= function (str) {
return  this.value =`${this.value}${str}`;
};
StringBuilder.prototype.padStart = function (str) {
 return this.value =`${str}${this.value}`;
// return this.value.unshift(str);
};
StringBuilder.prototype.padBoth= function (str) {
return this.value =`${str}${this.value}${str}`;
  
};


// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
//   let array = [...orderedItems];
//   array.forEach((arr) => totalPrice +=arr)

  
//   // Пиши код выше этой строки
//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4])
// console.log(calculateTotalPrice([12, 85, 37, 4]));
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки
  let num = [...numbers];
  num.forEach(number => {
    if (number > value) {
       filteredNumbers.push(number);
    }
  });
  
  
    // Пиши код выше этой строки
    return filteredNumbers;
}
  
// filterArray([1, 2, 3, 4, 5], 3)
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// // возвращает[4, 5].

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  let array1 = [...firstArray];
  let array2 = [...secondArray];
  array1.forEach(num => {
     if (array2.includes(num)) {
        commonElements.push(num);
      }
  })

    // for (let i = 0; i < firstArray.length; i += 1) {
    //   if (secondArray.includes(firstArray[i])) {
    //     commonElements.push(firstArray[i]);
    //   }
    // }
  
    return commonElements;
    // Пиши код выше этой строки
}
// getCommonElements([1, 2, 3], [2, 4])
// console.log(getCommonElements([1, 2, 3], [2, 4]));
function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  const numberEven = [];
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] % 2 === 0) {
        numberEven.push(numbers[i] + value);
      } else if (numbers) {
        numberEven.push(numbers[i])
      }
  }
  return numberEven;
    // Пиши код выше этой строки
}
// changeEven([1, 2, 3, 4, 5], 10)
// console.log(changeEven([1, 2, 3, 4, 5], 10));
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
  // Пиши код ниже этой строки
// const allGenres = books.flatMap(gener => gener.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter((course, index, array) => array.indexOf(course) === index);
// console.log(uniqueGenres);
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';

// const topRatedBooks = books.filter( rat => rat.rating >= MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter(elt => elt.author === AUTHOR);
// console.log(booksByAuthor);
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 23,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 10,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 1,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]
// const getUsersWithEyeColor = (users, color) => {
//   console.log(users);
//   const filt = users.filter( user => user.eyeColor === color);
  
//   return filt;
// };

// getUsersWithEyeColor(users, 'brown');
// console.log(getUsersWithEyeColor(users, 'brown'));


// const getUsersWithAge = (users, minAge, maxAge) => {
//  const user = users.filter( user => user.age >= minAge && user.age <= maxAge );
// return user;
// };
// const minAge = 10;
// const maxAge = 30;
// getUsersWithAge(users, minAge, maxAge);
// console.log(getUsersWithAge(users, minAge, maxAge));


// const getUsersWithFriend = (users, friendName) => {

//   const ur = users.filter(user =>  user.friends.includes(friendName) );
//   return ur;
// };
// getUsersWithFriend(users, 'Briana Decker');
// console.log(getUsersWithFriend(users, 'Briana Decker'));
const getFriends = (users) => {
  return users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);
   
};

// console.log(  getFriends(users));
// const secondArray = [17, 61, 23];
// const eachElementInSecondIsOdd = secondArray.every(x => x %2 !== 0);

// console.log(eachElementInSecondIsOdd);
const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((acc, curent) => {
//   return acc + (curent.playtime / curent.gamesPlayed);
// }, 0);
// console.log(totalAveragePlaytimePerGame);
// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => {
//     return acc + user.balance;
//   }, 0);
// };

// console.log(calculateTotalBalance(users));
const getTotalFriendCount = users => {
  return users.reduce((acc, curent) => {
    return acc + curent.friends.length;
  },0);
}
console.log(getTotalFriendCount(users));