function game1() {
    let numberMonth = Number(prompt('Введите номер месяца от 1 до 12'));

    function seasons(num) {
        if (num <= 0 || num >= 13) {
            alert('Нет столько месяцев в году');
        } else if (num == 1 || num == 2 || num == 1) {
            alert('Зима');
        } else if (num == 3 || num == 4 || num == 5) {
            alert('Весна');
        } else if (num == 6 || num == 7 || num == 8) {
            alert('Лето')
        } else {
            alert('Осень');
        }
    }
    seasons(numberMonth);
}