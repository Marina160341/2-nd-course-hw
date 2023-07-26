//Задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
people.sort((firstItem, secondItem) => firstItem.age - secondItem.age);
console.log(people); 

//Задание 2

 function isPositive(number) {
      return number>0;
   }
 function isMale(item) { 
      return item.gender == 'male';
}
function filter(arr, item) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (item(arr[i])) {
        output.push(arr[i]);
            }
        }
        return output;
     }
     const people2 = [
         {name: 'Глеб', gender: 'male'},
         {name: 'Анна', gender: 'female'},
         {name: 'Олег', gender: 'male'},
         {name: 'Оксана', gender: 'female'}
      ];
   
     console.log(filter(people2, isMale));
     console.log(filter([3, -4, 1, 9], isPositive));
    
//Задание 3    
let timerId = setInterval(() => { console.log(new Date);}, 3000);
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошли'); }, 30000);
  
  
//Задание 4
   function delayForSecond() {
     console.log('Привет,Глеб');
   }
   setTimeout(delayForSecond, 1000);

// Задание 5 
function delayForSecond2(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond2(() => sayHi('Глеб'));
  