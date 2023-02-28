let arr = prompt('укажите значения через запятую');

let regExp = /\s*,\s*/;
let newArr = arr.split(regExp);
console.log('массив который задал пользователь', newArr);

newArr.splice(2, 3)
console.log('массив в котором удалили с 2 по 4 элемент', newArr);