//Задание 1
let str='js';
str=str.toUpperCase();
console.log(str);

//Задание 2
function searchStart(word) {
    searchStart.forEach(word => {

        
    });
}
//Задание 3
let numberUser=32.58884;
console.log(Math.floor(numberUser));
console.log(Math.ceil(numberUser))
console.log(Math.round(numberUser));

//Задание 4

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

//Задание 5
function randomNumber() {
   return Math.round(Math.random()*10);
    }
console.log(randomNumber());

//Задание 6
const getRandomArrNumbers = function(n) {
    let arrWithNums = [];
    let len=n/2;
    for (i = 0; i < len; i++) {
     arrWithNums.push(Math.floor(Math.random() * n));
    }
    return arrWithNums;
  }
  console.log(getRandomArrNumbers(prompt('Введите число, сколько чисел необходимо рондомить в массив?',)));
  
//Задание 7
  const getRandomdiapazon =function (a, b) {
    return Math.round(Math.random()*(b-a))+a;
    
  }
  console.log(getRandomdiapazon(5, 9));

//Задание 8
let currentDate = new Date();
console.log(currentDate);


//Задание 9
function getFutureDate(daysAhead) {
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    return date
  }
  
  const fourDays = getFutureDate(73);
  console.log(fourDays);

//Задание 10
const days1 = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months1 = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate1 = new Date();
let fullDate1 = "Сегодня: " + myDate1.getDate() + 
" " + months1[myDate1.getMonth()] + " " + myDate1.getFullYear() + 
"-это " + days1[myDate1.getDay()];
let myTime="Время: "+myDate1.getHours()+":"+myDate1.getMinutes()+":"+myDate1.getSeconds()
console.log(fullDate1);
console.log(myTime);