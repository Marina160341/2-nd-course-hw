//Задание 1
 function returnNumber(a, b) {
     if (a<b) {
     return(`Наименьшее число из введённых: ${a}`);
   }
     else{
     return(`Наименьшее число из введенных : ${b}`);
          }
     }
      console.log(returnNumber(prompt('Введите первое число',), prompt('Введите второе число')));

//Задание 2
 let number=(a) => {
    if (a%2==0) {
       return('Введеное число четное');
       }
    else{
       return('Введеное число нечетное');
     }
}
     console.log(number(prompt('Введите число')));

//Задание 3
let square = a => {
   return(`Квадрат введеного числа равен: ${a**2}`);
    }
   console.log(square(prompt("Введите число",)));

//Задание 4

   function messageAge(question) {
   let age=prompt(question);
   if (age<=0) {
    alert('Вы ввели не правильное значение'); 
    } else if (age<=12) {
    alert('Привет друг!');
    } else {
    alert('Добро пожаловать!');
    }
}
    messageAge('Сколько вам лет?',);

//Задание 5
 let multi=(c, d)=>{
 if (!isNaN(c) && !isNaN(d)) {
     let s=c*d;
    return(`Произведение этих чисел равно: ${s}`);
  }
 else{
    return('Одно или оба значения не являются числом');
 }
 }
 console.log(multi(prompt('Введите первое число',)),(prompt("Введите второе число")));

//Задание 6
 function duplex(number) {
    let n=prompt(number)
    if (!isNaN(n)) {
       let k=n**3;
       alert(`Введенное вами число в кубе равняется ${k}`);
        }
    else{
       alert('Переданный параметр не является числом');
    }
}
 duplex('Введите число');
    
//Задание 7
function getAreaCircle() {
   return Math.PI*this.radius**2;
   }
function getPerimeterCircle() {
   return 2*Math.PI*this.radius;
}   
let circle1 ={
     radius:5,
     getArea: getAreaCircle,
     getPerimeter:getPerimeterCircle,
     };
let circle2= {
     radius: 5,
     getArea: getAreaCircle,
     getPerimeter:getPerimeterCircle,
}
console.log(circle1.getArea());
console.log(circle2.getPerimeter());

     
        