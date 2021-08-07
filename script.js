"use strickt";
let income = 'Инвестиции';
let deposit = true;
let mission = 200000;





let money = +prompt('Ваш месячный доход', '50000');

let addExpenses = prompt('Перечислите расходы за рассчитываемый период через запятую', 'Коммуналка, еда, проезд');

deposit = confirm('Есть ли у вас депозит в банке');

let expenses1 = prompt('Введите обязательную статью расходов', 'квартплата');

let amount1 = +prompt('Во сколько это обойдётся?', Number(15000));

let expenses2 = prompt('Введите обязательную статью расходов', 'еда');

let amount2 = +prompt('Во сколько это обойдётся?', Number(10000));




// дз4
// Объявление функции getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц

function getExpensesMonth(){
    return amount1 + amount2;                                     // Функция возвращает обязательные расходы
}                 



// Объявлена функция getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth (){
    return money - getExpensesMonth();

 }

 //Объявлена переменная accumulatedMonth и ей  присвоен результат вызова функции getAccumulatedMonth

 let accumulatedMonth = getAccumulatedMonth();


//Объявлена функция getTargetMonth. Подсчитывает за какой период будет достигнута цель

function getTargetMonth (){
    return Math.round (mission / accumulatedMonth);

}

// присвоение переменной budgetDay значение переменной(считается по функции getAccumulatedMonth)/30
let budgetDay = accumulatedMonth/30;


// Функция показывает типы данных
function showTypeOf(data){
    console.log (data, typeof(data));
}

//Функция выполняющая условие budgetDay (уровень дохода)
let getStatusIncome = function() {
    if (budgetDay >= 1200) {
        return('У вас высокий уровень дохода');
    } if (budgetDay >= 600 < 1200){
        return('У вас средний уровень дохода');
    } if (budgetDay < 600 >0) {
        return('У вас низкий уровень дохода');
    } if (budgetDay <0) {
        return('Что-то пошло не так');
    }
};


// Вывод функции showTypeOf
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// Вывод функции расходов за месяц
getExpensesMonth();          
console.log('Расходы за месяц: ' + getExpensesMonth());

// Возможные расходы в виде массива
console.log(addExpenses.split(', '));


getTargetMonth();
console.log('Цель будет достигнута через ' + getTargetMonth() + ' месяцев');

console.log('Ваш дневной бюджет: ' + Math.round (budgetDay));

console.log(getStatusIncome());