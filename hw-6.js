//Задание 1
let arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 10) break;
    console.log(arr[i]);
}
//Задание 2
let arrIndex = [1, 5, 4, 10, 0, 3];
console.log(arrIndex.indexOf(4));
//Задание 3
let arrJoin = [1, 3, 5, 10, 20];
console.log(arrJoin.join(' '));
//Задание 4
let arrOne = [];
for (let i = 0; i < 3; i++) {
    arrOne[i] = [];
    for (let j = 0; j < 3; j++) {
        arrOne[i][j] = 1
    }
}
console.log(arrOne);
//Задание 5
let array = [1, 1, 1];
array.push(2, 2, 2);
console.log(array);
//Задание 6
let array2 = [9, 8, 7, 'a', 6, 5];
array2.sort();
array2.pop()
console.log(array2);
//Задание 7
let arrNumber = [9, 8, 7, 6, 5];
let numbers = Number(prompt('Введите число'));
if (isNaN(numbers)) {
    console.log('это не число');
} else {
    if (arrNumber.includes(numbers)) {
        console.log('Такое число есть в массиве!');
    } else {
        console.log('Такого числа в массиве нет!');
    }
}
//Задание 8
const letters = 'abcdef';
const lettersReverse = letters.split('').reverse().join('');
console.log(lettersReverse);
//Задание 9
let arrNumber2 = [
    [1, 2, 3],
    [4, 5, 6]
];
let result = [].concat(arrNumber2[0], arrNumber2[1]);
console.log(result);
//Задание 10
let number = [5, 8, 6, 4, 7, 5];
for (let i = 0; i < number.length; i++) {
    if (i === number.length - 1) {
        console.log('${number[i]}-это последний элемент массива');
    } else {
        console.log(number[i] + number[i + 1]);
    }
}
//Задание 11
let numberItem=[2, 3, 6, 4, 5];
let resultSquare=numberItem.map(item=>(item**2));
console.log(resultSquare);

//Задание 12
let words=(['время', 'бежит', 'неумолимо',]);
let getLengthWords=words.map(item=>(item.length));
console.log(getLengthWords);
//Задание 13
let arrMy=[-1, 6, 8, -8];
let result2=arrMy.filter(item=>item<0);
console.log(result2);

//Задание 14
let randomsNumber= new Array(10)  ;
let userNumbers ; 
randomsNumber = randomsNumber.fill(0).map(() => Math.floor(Math.random() * 10));;
for (item of randomsNumber) {
    if (item%2==0) {
        userNumbers=randomsNumber.map;
    }
    console.log(userNumbers);
}

//Задание 15
const makeARandomNumber = function(){
     return Math.floor(Math.random() * 10);
     }
     const randoms = Array(6).fill(0).map(makeARandomNumber);
     const sum = randoms.reduce((partialSum, a) => partialSum + a, 0);
     const long = randoms.length;
     const middle = sum / long;
     console.log(middle);
   