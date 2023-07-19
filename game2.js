function game2() {
    let fructs = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'] ;
    fructs = fructs.sort(() => Math.random() - 0.5);
    alert (fructs);
    const userAnswer1 = prompt ('Какой фрукт был первым?');
    const userAnswer2= prompt('Какой фрукт был последний?');
    if (fructs[0].toUpperCase()===userAnswer1.toUpperCase() && fructs[6].toUpperCase()===userAnswer2.toUpperCase()) {
        alert ('Ты угадал!');
    }
    else if (fructs[0].toUpperCase()===userAnswer1.toUpperCase() || fructs[6].toUpperCase()===userAnswer2.toUpperCase() ) {
        
         alert ('Ты был близок к победе!');
    }
    else {
        alert ('Ты не угадал!');
    }
}
