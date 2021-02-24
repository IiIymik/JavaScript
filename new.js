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

console.log(bubbleSort(ex4));


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