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
pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));