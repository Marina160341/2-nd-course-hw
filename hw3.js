//Задание 1

// let password = 3;
// let userPassword= prompt('Введите пароль', '');
// if (password == userPassword) {
//     console.log('Пароль введен верно');
// }
// else{
//     console.log('Пароль введен неправильно');
// }
 
//Задание 2
//  let c = Number(prompt('Введите число от 0 до 10', ''));
//  if (c>0 && c<10){
//     console.log('Верно');
//     }
//  else{
//     console.log('Не верно');
//     }

//Второй вариант задача 2

// let c = Number(prompt('Введите число от 0 до 10', ''));
// c = (c>0 && c<10)? 'Верно': 'Неверно';
// console.log(c);

//Задача 3
 
// let d =Number(prompt('Введите первую переменную', ""));
// let c =Number(prompt('Введите вторую переменную', ""));
// let proverka;
// proverka =(c>100 || d>100)? 'Верно' : "Неверно";
// console.log(proverka);

//Задача 4

// let a ='2';
// let b='3';
// alert(Number (a)+ Number (b));

//Задача 5

// let monthNumber = Number(prompt('Введите номер месяца', ''));
// switch (monthNumber) {
//     case 1:
//     case 12: 
//     case 2:   
//         console.log('Это зимний месяц');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Это весенний месяц');  
//         break;
//     case 6:
//     case 7:
//     case 8:        
//         console.log('Это летний месяц');   
//        break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Это осенний месяц");                      
//        break;
//     default:
//         console.log('В году всего 12 месяцев');
        
// }
//Дополнительное задание.

//Задание 7
// let number=Number(prompt("Пожалуйста, введите любое число", ''));
// while(isNaN (number)) {
    
// let number=Number(prompt("Пожалуйста, введите любое число", ''));
// if (!isNaN (number)) break;
// {
//  alert ("Введеное значение не является числом");
// }
// }
// if (number%2==0  ){
//          alert('вы ввели четное число');
//  }
//  else {
//     alert ("вы ввели нечетное число");
//  }
//Задание 8
// alert ('Для удобного использования банка предлагаем установить мобильное приложение.');
// let clientOS=prompt('Если вы пользуетесь ОС iOS нажмите "0", если вы используете ОС Android нажмите "1"');
// if (clientOS==0){
//     console.log('«Установите версию приложения для iOS по ссылке».');

// }
// else{
//     console.log('«Установите версию приложения для Android по ссылке».');
// }

//Задание 9

// let clientOS=prompt ('Если вы пользуетесь ОС iOS нажмите "0", если вы используете ОС Android нажмите "1"');
// let clientDeviceYear= prompt ('Если производство вашего телефона до 2015 года нажмите "0", если производство вашего телефона после 2015 года нажмите "1"');
// if (clientOS==0 && clientDeviceYear==0) {
//     alert('«Установите облегченную версию приложения для iOS по ссылке».')
//     }
// else if (clientOS==1 && clientDeviceYear==0){
//     alert('«Установите облегченную версию приложения для Android по ссылке».');
// }
// else if (clientOS==0 && clientDeviceYear==1){
//     alert('«Установите версию приложения для iOS по ссылке».');
// }
// else if (clientOS==1 && clientDeviceYear==1){
// alert('«Установите версию приложения для Android по ссылке».');
// }
// else{
//     alert ('Вы ввели не то о чём вас просили');
// }

    
    
