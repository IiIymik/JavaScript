// const findUlEl = document.querySelector('ul');
// // console.log(findUlEl);
// const findLiEl = document.querySelectorAll('li');
// // console.log(findLiEl);
// // console.log(findUlEl.firstElementChild);
// const lookTextContent = document.querySelector('p');
// lookTextContent.textContent = "im look forward";
// lookTextContent.style.backgroundColor = "blue";
// // console.log(lookTextContent);
// const classLook = document.querySelector('.list');
// classLook.classList.contains('.list-item');
// classLook.classList.add('box');
// classLook.classList.remove('list');
// classLook.classList.replace('box', 'newBox');
// classLook.classList.toggle('paint');
// console.log(classLook);
// const atrb = document.querySelector('.newBox');
// atrb.hasAttribute('a');
// atrb.getAttribute('li');
// atrb.setAttribute;
// console.log(atrb);
// 2. В форме авторизации пользователь должен ввести 
// логин и пароль для входа в систему.
//   - кнопка 'Войти' становится активной только в том 
//     случае когда заполнены оба поля и пользователь отметил 
//     чекбокс
//   - поле логин должно содержать значение минимум 4 символа
//   - поле пароль от 8-30 символов
//   - если условия не соответствуют требованиям то 
//     при потере фокуса поле ввода показывает ошибку
//   - после нажатия кнопки Войти надо вывести сообщение 
//     об успешной авторизацие
// */

// const login = document.querySelector("#login");
// const password = document.querySelector("#password");
// const checkBox = document.querySelector("#checkBox");
// const submitButton = document.querySelector("#submitButton");
// const msgBox = document.querySelector("#msgBox");

// const loginInfo = document.querySelector("#loginInfo");
// const passwordInfo = document.querySelector("#passwordInfo");

// login.addEventListener("focus", e => {
//   loginInfo.style.display = "block";
// });

// login.addEventListener("blur", e => {
//   loginInfo.style.display = "none";
//   if (login.value.length < 4) {
//     login.classList.add("error");
//   } else {
//     // Вариант 1
//     if (login.classList.contains("error")) {
//       login.classList.remove("error");
//     }
//   }
// });

// password.addEventListener("focus", e => {
//   passwordInfo.style.display = "block";
// });

// password.addEventListener("blur", e => {
//   passwordInfo.style.display = "none";
//   if (password.value.length < 8 || password.value.length > 30) {
//     password.classList.add("error");
//   } else {
//     // Вариант 2
//     password.classList.remove("error");
//   }
// });

// submitButton.addEventListener("click", e => {
//   e.preventDefault();
//   if (
//     login.classList.contains("error") ||
//     password.classList.contains("error") ||
//     !checkBox.checked
//   ) {
//     msgBox.innerHTML = "Условия не соответствуют требованиям!";
//   } else {
//     msgBox.innerHTML = "Авторизация прошла успешно!";
//   }
// });
function findOdd(A) {
  let num = null;
  const result = A.reduce(function(acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
 for (const key in result) {
   if (result[key] % 2 !== 0) {
    return num = key;
  } 
 }
  return num;
}

  console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))