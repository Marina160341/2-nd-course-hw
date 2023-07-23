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
          
    function filter(arr, item) {
        const output = [];
        for (let i = 0; i < arr.length; i++) {
            if (item(arr[i])) {
                output.push(arr[i]);
            }
        }
        return output;
    }
   
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const people1 = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
     ];
     let genderPeople =  people1.filter(function(item) {
        return item.gender == 'male'});
        console.log(genderPeople);
//Задание 3
let currentDate=new Date();
let timerId = setInterval(() => console.log(`${currentDate}`), 3000);       
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);    
    
//Задание 4
function delayForSecond(callback) {
    console.log( callback );
  }
  
  setTimeout(delayForSecond, 1000, "Привет, Василий!"); 

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
console.log(delayForSecond2());
setTimeout(sayHi,1000,"Глеб!");
    
    